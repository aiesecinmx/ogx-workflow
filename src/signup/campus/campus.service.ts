import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campus } from 'src/common/entities/campus';
import { Repository } from 'typeorm';

@Injectable()
export class CampusService {
  private readonly logger = new Logger(CampusService.name);

  constructor(
    @InjectRepository(Campus)
    private readonly campusesRepository: Repository<Campus>
  ) {}

  async findByStateId(state: string) {
    const campuses = await this.campusesRepository.find({
      where: { state },
      relations: ['university'],
      cache: true,
    });
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
