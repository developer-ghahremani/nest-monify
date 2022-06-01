import { Source, SourceSchema } from './../source/entities/source.entity';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { Wallet, WalletSchema } from './../wallet/entity/wallet.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { UserModule } from './../user/user.module';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService],
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
      { name: Source.name, schema: SourceSchema },
      { name: Wallet.name, schema: WalletSchema },
    ]),
  ],
})
export class TransactionModule {}
