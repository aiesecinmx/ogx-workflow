import { Test, TestingModule } from '@nestjs/testing';
import { PodioService } from './podio.service';

describe.skip('PodioService', () => {
  let service: PodioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PodioService],
    }).compile();

    service = module.get<PodioService>(PodioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
