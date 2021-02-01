import { CampusesSeeds } from '../seeds/campuses.seed';
import { UniversitiesSeed } from '../seeds/universities.seed';
import { Campus } from '../src/common/entities/campus';
import { State } from '../src/common/entities/state';
import { University } from '../src/common/entities/university';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { AllocationSeeds } from '../seeds/allocations.seed';
import { Product } from '../src/common/entities/product';
import { ExpaEntity } from '../src/common/entities/expa-entity';
import { Allocation } from '../src/common/entities/allocation';

export class InsertAllocationSeeds1611067092754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect();
    const states = await queryRunner.connection.getRepository(State).find();
    const statesMap = new Map(states.map((state) => [state.name, state]));

    const universities = UniversitiesSeed.map((university) => ({
      ...university,
      state: statesMap.get(university.state),
    }));
    const universityMap = createMap(universities, 'id');
    await queryRunner.connection.getRepository(University).save(universities);

    const campuses = CampusesSeeds.map((campus) => ({
      ...campus,
      university: universityMap.get(campus.universityId),
      state: statesMap.get(campus.state),
    }));
    const insertedCampuses: Campus[] = await queryRunner.connection
      .getRepository(Campus)
      .save(campuses);

    const allocationsWithoutCampus = AllocationSeeds.filter(
      ({ universityId }) => universityId
    );
    const mainCampusesToCreate = allocationsWithoutCampus.map((campus) => {
      const university = universityMap.get(campus.universityId);
      return { university, state: university.state, isMainCampus: true };
    });
    const insertedMainCampuses: Campus[] = await queryRunner.connection
      .getRepository(Campus)
      .save(mainCampusesToCreate);
    const mainCampusIds = insertedMainCampuses.map(({ id }) => id);
    const allocationsWithMainCampus = allocationsWithoutCampus.map(
      (allocation, index) => ({
        ...allocation,
        campusId: mainCampusIds[index],
      })
    );

    const campusMap = createMap(
      insertedCampuses.concat(insertedMainCampuses),
      'id'
    );
    const productsMap = createMap(
      await queryRunner.connection.getRepository(Product).find(),
      'shortName'
    );
    const expaEntitiesMap = createMap(
      await queryRunner.connection.getRepository(ExpaEntity).find(),
      'name'
    );

    const itemsToCreate = [
      ...AllocationSeeds.filter(({ campusId }) => campusId),
      ...allocationsWithMainCampus,
    ];
    const allocationsToSave: Array<Omit<Allocation, 'id'>> = itemsToCreate
      .map((seed) =>
        Object.entries(seed.productMapping).map(
          ([productShortName, eyName]) => ({
            campus: campusMap.get(seed.campusId),
            product: productsMap.get(productShortName),
            entity: expaEntitiesMap.get(eyName),
          })
        )
      )
      .flat();

    await queryRunner.connection
      .getRepository(Allocation)
      .save(allocationsToSave);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect();

    await queryRunner.connection.getRepository(Allocation).delete({});
    await queryRunner.connection.getRepository(Campus).delete({});
    await queryRunner.connection.getRepository(University).delete({});
  }
}

function createMap<T>(array: T[], key: keyof T): Map<unknown, T> {
  return new Map(array.map((item) => [item[key], item]));
}
