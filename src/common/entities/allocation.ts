import {
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Campus } from './campus';
import { ExpaEntity } from './expa-entity';
import { Product } from './product';

@Entity()
export class Allocation {
  @PrimaryGeneratedColumn('uuid') @Generated('uuid') id: string;

  @ManyToOne(() => Campus) campus: Campus;
  @ManyToOne(() => Product) product: Product;
  @ManyToOne(() => ExpaEntity) entity: ExpaEntity;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
}
