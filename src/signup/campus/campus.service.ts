import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campus } from 'src/common/entities/campus';
import { UniversityAllocation } from 'src/common/entities/university-allocation';
import { Repository } from 'typeorm';

@Injectable()
export class CampusService {
  private readonly logger = new Logger(CampusService.name);

  constructor(
    @InjectRepository(Campus)
    private readonly campusesRepository: Repository<Campus>,
    @InjectRepository(UniversityAllocation)
    private readonly allocationsRepository: Repository<UniversityAllocation>
  ) {}

  async findByStateId(state: string) {
    // TODO: Extract this logic to a custom repository
    this.logger.debug(`Finding valid campuses for state ${state}`);
    const validCampuses = await this.allocationsRepository
      .createQueryBuilder('allocation')
      .select('campus.id as id')
      .innerJoin('allocation.campus', 'campus', 'campus.state = :id', {
        id: parseInt(state),
      })
      .where('allocation.effectiveEnd is null')
      .groupBy('campus.id')
      .getRawMany()
      .then((rawCampuses) => rawCampuses.map(({ id }) => id));
    this.logger.debug(validCampuses);

    const campuses = await this.campusesRepository.findByIds(validCampuses, {
      relations: ['university'],
      cache: true,
    });
    // TODO: Save this transformation in the database instead?
    return campuses.map((campus) => {
      const {
        university: { shortName, name: universityName },
        isMainCampus,
        id,
      } = campus;
      let campusName = shortName
        ? `${shortName} - ${universityName}`
        : universityName;

      if (isMainCampus) return { id, campusName };

      const { prefix, name, denomination } = campus;
      campusName += ' (';
      campusName += denomination
        ? denomination
        : `${prefix || 'Campus'} ${name}`;
      campusName += ')';
      return { id, campusName };
    });
  }
}
