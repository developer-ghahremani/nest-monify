import { Transaction, TransactionSchema } from './entities/transaction.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { UserModule } from './../user/user.module';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
})
export class TransactionModule {}
