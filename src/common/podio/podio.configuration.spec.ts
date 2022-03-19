import { Test, TestingModule } from '@nestjs/testing';
import { PodioConfiguration } from './podio.configuration';

describe.skip('PodioConfiguration', () => {
  let provider: PodioConfiguration;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PodioConfiguration],
    }).compile();

    provider = module.get<PodioConfiguration>(PodioConfiguration);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
