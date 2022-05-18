import { Module } from '@nestjs/common';
import { AccountingSourceService } from './accounting-source.service';
import { AccountingSourceController } from './accounting-source.controller';

@Module({
  controllers: [AccountingSourceController],
  providers: [AccountingSourceService]
})
export class AccountingSourceModule {}
