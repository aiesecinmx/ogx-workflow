import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Allocation } from './allocation';
import { Product } from './product';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid') @Generated('uuid') id: string;

  @Column() firstName: string;
  @Column() lastName: string;
  @Column() phone: string;
  @Column() email: string;
  @Column({ nullable: true }) maskedEmail?: string;

  @Column('int', { unsigned: true, nullable: true }) expaId?: number;
  @Column('timestamp', { nullable: true }) contacted?: Date;

  @Column({ default: 'Other' }) referral: string;
  @ManyToOne(() => Product) mainProduct: Product;
  @ManyToOne(() => Allocation) allocation: Allocation;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}

/**
 * Pending functionality to be re-evaluated:
 *
 * EP Preferences (english proficiency, travel preferences, etc.)
 * Multiple products (one EP signs up for multiple products)
 * Incompatible allocations. (Having a mainAllocation and multiple other ones)
 */
