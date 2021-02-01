import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Campus } from './campus';
import { State } from './state';

@Entity()
export class University {
  @PrimaryColumn('uuid') id: string;

  @Column() name: string;

  @Column({ nullable: true }) shortName?: string;

  @ManyToOne(() => State, { nullable: true })
  state?: State;

  @OneToMany(() => Campus, ({ university }) => university)
  campuses: Campus[];

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
