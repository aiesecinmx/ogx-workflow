import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Allocation } from 'src/common/entities/allocation';
import { Product } from 'src/common/entities/product';
import { Repository } from 'typeorm';

@Injectable()
export class AllocationService {
  private readonly logger = new Logger(AllocationService.name);

  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    @InjectRepository(Allocation)
    private readonly allocationsRepository: Repository<Allocation>
  ) {}

  async findByAllocationInfo(
    campus: string,
    shortName: string
  ): Promise<Allocation> {
    this.logger.log(
      `Querying allocation for campus ${campus} and product ${shortName}`
    );
    const product = await this.productsRepository.findOne({
      where: { shortName },
    });
    if (!product) {
      this.logger.warn(`The product ${shortName} was not found`);
      return;
    }

    return this.allocationsRepository.findOne({
      where: { campus, product },
      relations: ['entity'],
    });
  }
}
