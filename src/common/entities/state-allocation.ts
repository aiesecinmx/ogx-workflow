import { ChildEntity, Column, ManyToOne } from 'typeorm';
import { Allocation } from './allocation';
import { State } from './state';

@ChildEntity()
export class StateAllocation extends Allocation {
  @Column({ nullable: true })
  denomination?: string;

  @ManyToOne(() => State, (allocation) => allocation.defaultAllocations)
  state: State;
}
