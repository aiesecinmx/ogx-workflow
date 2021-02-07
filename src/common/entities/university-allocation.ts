import { ChildEntity, ManyToOne } from 'typeorm';
import { Allocation } from './allocation';
import { Campus } from './campus';

@ChildEntity()
export class UniversityAllocation extends Allocation {
  @ManyToOne(() => Campus) campus: Campus;
}
