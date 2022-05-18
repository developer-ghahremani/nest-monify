import { Module } from '@nestjs/common';
import { AccountingBookService } from './accounting-book.service';
import { AccountingBookController } from './accounting-book.controller';

@Module({
  controllers: [AccountingBookController],
  providers: [AccountingBookService]
})
export class AccountingBookModule {}
