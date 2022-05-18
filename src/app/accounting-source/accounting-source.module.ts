import {
  AccountingBook,
  AccountingBookSchema,
} from './../accounting-book/entities/accounting-book.entity';
import {
  AccountingSource,
  AccountingSourceSchema,
} from './entities/accounting-source.entity';

import { AccountingBookModule } from './../accounting-book/accounting-book.module';
import { AccountingSourceController } from './accounting-source.controller';
import { AccountingSourceService } from './accounting-source.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AccountingSourceController],
  providers: [AccountingSourceService],
  imports: [
    MongooseModule.forFeature([
      { name: AccountingSource.name, schema: AccountingSourceSchema },
      { name: AccountingBook.name, schema: AccountingBookSchema },
    ]),
    UserModule,
  ],
})
export class AccountingSourceModule {}
