import { Test, TestingModule } from '@nestjs/testing';
import { AccountingSourceService } from './accounting-source.service';

describe('AccountingSourceService', () => {
  let service: AccountingSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountingSourceService],
    }).compile();

    service = module.get<AccountingSourceService>(AccountingSourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
