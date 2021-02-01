import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Allocation } from './allocation';

@Entity()
export class ExpaEntity {
  @PrimaryColumn('int', { unsigned: true }) expaId: number;

  @Column()
  name: string;

  @Column('boolean', { default: false })
  isClosed: boolean;

  @OneToMany(() => Allocation, ({ entity }) => entity)
  allocations: Allocation;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
