import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from 'src/common/entities/state';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly statesRepository: Repository<State>
  ) {}

  findAll() {
    return this.statesRepository.find({ cache: true });
  }

  findByName(name: string) {
    return this.statesRepository.findOne({ name });
  }
}
