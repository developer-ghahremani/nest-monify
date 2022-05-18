import {
  AccountingBook,
  AccountingBookSchema,
} from './entities/accounting-book.entity';

import { AccountingBookController } from './accounting-book.controller';
import { AccountingBookService } from './accounting-book.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AccountingBookController],
  providers: [AccountingBookService],
  exports: [AccountingBookService],
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: AccountingBook.name, schema: AccountingBookSchema },
    ]),
  ],
})
export class AccountingBookModule {}
