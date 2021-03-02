import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';
import { ExpaEntity } from './expa-entity';
import { Product } from './product';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Allocation {
  @PrimaryGeneratedColumn('uuid') @Generated('uuid') id: string;

  @ManyToOne(() => Product) product: Product;
  @ManyToOne(() => ExpaEntity) entity: ExpaEntity;

  @Column() effectiveStart: Date;
  @Column({ nullable: true }) effectiveEnd: Date = null;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
}
