import { Source, SourceSchema } from './entities/source.entity';

import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';
import { TransactionModule } from './../transaction/transaction.module';
import { UserModule } from './../user/user.module';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  controllers: [SourceController],
  providers: [SourceService],
  imports: [
    MongooseModule.forFeature([{ name: Source.name, schema: SourceSchema }]),
    UserModule,
    WalletModule,
    TransactionModule,
    CategoryModule,
  ],
})
export class SourceModule {}
