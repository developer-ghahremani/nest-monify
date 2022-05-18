import { Test, TestingModule } from '@nestjs/testing';
import { AccountingBookController } from './accounting-book.controller';
import { AccountingBookService } from './accounting-book.service';

describe('AccountingBookController', () => {
  let controller: AccountingBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountingBookController],
      providers: [AccountingBookService],
    }).compile();

    controller = module.get<AccountingBookController>(AccountingBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
