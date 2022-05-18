import { Test, TestingModule } from '@nestjs/testing';
import { AccountingSourceController } from './accounting-source.controller';
import { AccountingSourceService } from './accounting-source.service';

describe('AccountingSourceController', () => {
  let controller: AccountingSourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountingSourceController],
      providers: [AccountingSourceService],
    }).compile();

    controller = module.get<AccountingSourceController>(AccountingSourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
