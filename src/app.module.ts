import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { CategoryModule } from './app/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { FinancialUnitModule } from './app/financial-unit/financial-unit.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SourceModule } from './app/source/source.module';
import { TagModule } from './app/tag/tag.module';
import { TransactionModule } from './app/transaction/transaction.module';
import { UserModule } from './app/user/user.module';
import { WalletModule } from './app/wallet/wallet.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      // `mongodb://localhost:27017/monify-${process.env.NODE_ENV.trim()}?authSource=admin`,
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${
        process.env.DB_HOST
      }:${
        process.env.DB_PORT
      }/monify-${process.env.NODE_ENV.trim()}?authSource=admin`,
    ),
    AuthModule,
    UserModule,
    WalletModule,
    FinancialUnitModule,
    SourceModule,
    CategoryModule,
    TagModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
