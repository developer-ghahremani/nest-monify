import { AccountingBookController } from './accounting-book.controller';
import { AccountingBookService } from './accounting-book.service';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AccountingBookController],
  providers: [AccountingBookService],
  imports: [UserModule],
})
export class AccountingBookModule {}
