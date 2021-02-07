import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateAllocation } from 'src/common/entities/state-allocation';
import { UniversityAllocation } from 'src/common/entities/university-allocation';
import { Repository } from 'typeorm';
import { ExpaProduct } from '../types';

@Injectable()
export class AllocationService {
  private readonly logger = new Logger(AllocationService.name);

  constructor(
    @InjectRepository(StateAllocation)
    private readonly stateAllocationsRepository: Repository<StateAllocation>,
    @InjectRepository(UniversityAllocation)
    private readonly universityAllocationsRepository: Repository<UniversityAllocation>
  ) {}

  findByCampus(campus: string, productShortName: string) {
    const product = this.getProductId(productShortName);
    if (!product) return;

    this.logger.log(
      `Querying allocation for state ${campus} and product ${productShortName}`
    );
    return this.universityAllocationsRepository.findOne({
      where: { campus, product },
      relations: ['entity', 'product'],
    });
  }

  async findDefaultAllocation(state: number, productShortName: string) {
    const product = this.getProductId(productShortName);
    if (!product) return;

    this.logger.log(
      `Querying allocation for state ${state} and product ${productShortName}`
    );
    return this.stateAllocationsRepository.findOne({
      where: { state, product },
      relations: ['entity', 'product', 'state'],
    });
  }

  private getProductId(shortName: string): number {
    const product = ExpaProduct[shortName];
    if (!product) this.logger.warn(`The product ${shortName} was not found`);

    return product;
  }
}
