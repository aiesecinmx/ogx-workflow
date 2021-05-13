class StateAllocation {
  id: string;
  defaultName: string;
}

class CampusDto {
  id: string;
  campusName: string;
}

export class StateDto {
  id: string;
  campuses: CampusDto[];
  stateAllocations: StateAllocation[];
}
