import { Test, TestingModule } from '@nestjs/testing';
import { AccountingBookService } from './accounting-book.service';

describe('AccountingBookService', () => {
  let service: AccountingBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountingBookService],
    }).compile();

    service = module.get<AccountingBookService>(AccountingBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
