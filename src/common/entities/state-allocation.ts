import { ChildEntity, ManyToOne } from 'typeorm';
import { Allocation } from './allocation';
import { State } from './state';

@ChildEntity()
export class StateAllocation extends Allocation {
  @ManyToOne(() => State, (allocation) => allocation.defaultAllocations)
  state: State;
}
