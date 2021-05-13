import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateAllocation } from 'src/common/entities/state-allocation';
import { UniversityAllocation } from 'src/common/entities/university-allocation';
import { IsNull, Repository } from 'typeorm';
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
      `Querying active allocation for campus ${campus} and product ${productShortName}`
    );
    return this.universityAllocationsRepository.findOne({
      where: { campus, product, effectiveEnd: IsNull() },
      relations: ['entity', 'product'],
    });
  }

  async listDefaultAllocations(state: string) {
    const allocations = await this.stateAllocationsRepository
      .createQueryBuilder('allocation')
      .select('denomination, state.name')
      .innerJoinAndSelect('allocation.state', 'state', 'state.id = :state', {
        state,
      })
      .where('effectiveEnd is null')
      .groupBy('denomination')
      .getRawMany();

    return allocations.map(({ denomination, state_name: state }) => ({
      id: `default${denomination ? `:${denomination}` : ''}`,
      defaultName: `Otra universidad de ${denomination || state}`,
    }));
  }

  async findDefaultAllocation(
    state: number,
    productShortName: string,
    campusField: string
  ) {
    const [, denomination] = campusField.split(':');
    const product = this.getProductId(productShortName);
    if (!product) return;

    this.logger.log(
      `Querying default allocation for state ${state}, product ${productShortName}, denomination ${denomination}`
    );
    return this.stateAllocationsRepository.findOne({
      where: {
        denomination: denomination ?? IsNull(),
        state,
        product,
        effectiveEnd: IsNull(),
      },
      relations: ['entity', 'product', 'state'],
    });
  }

  private getProductId(shortName: string): number {
    const product = ExpaProduct[shortName];
    if (!product) this.logger.warn(`The product ${shortName} was not found`);

    return product;
  }
}
