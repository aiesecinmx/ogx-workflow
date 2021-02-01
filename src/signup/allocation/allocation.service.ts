import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Allocation } from 'src/common/entities/allocation';
import { AllocationInfo } from 'src/common/interfaces/signup-person.interface';
import { Repository } from 'typeorm';

@Injectable()
export class AllocationService {
  private readonly logger = new Logger(AllocationService.name);

  constructor(
    @InjectRepository(Allocation)
    private readonly allocationsRepository: Repository<Allocation>
  ) {}

  findByAllocationInfo({
    campus,
    product,
  }: AllocationInfo): Promise<Allocation> {
    this.logger.log(
      `Got allocation for campus ${campus} and product ${product}`
    );
    return this.allocationsRepository.findOne({
      where: { campus, product },
      relations: ['entity'],
    });
  }
}
