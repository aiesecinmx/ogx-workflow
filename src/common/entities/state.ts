import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Campus } from './campus';
import { StateAllocation } from './state-allocation';

@Entity()
export class State {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @OneToMany(() => Campus, ({ state }) => state)
  campuses: Campus[];

  @OneToMany(() => StateAllocation, ({ state }) => state)
  defaultAllocations: StateAllocation[];
}
