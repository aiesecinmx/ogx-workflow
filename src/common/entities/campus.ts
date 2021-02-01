import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { State } from './state';
import { University } from './university';

@Entity()
export class Campus {
  @PrimaryGeneratedColumn('uuid') @Generated('uuid') id: string;

  @Column({ nullable: true }) prefix?: string;
  @Column({ nullable: true }) name?: string;
  @Column({ nullable: true }) denomination?: string;

  @Column('boolean', { default: false }) isMainCampus: boolean;

  @ManyToOne(() => University, ({ campuses }) => campuses)
  university: University;

  @ManyToOne(() => State, ({ campuses }) => campuses)
  state: State;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
}
