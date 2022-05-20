import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './app/user/user.module';
import { WalletModule } from './app/wallet/wallet.module';
import { FinancialUnitModule } from './app/financial-unit/financial-unit.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://localhost:27017/monify-${process.env.NODE_ENV.trim()}?authSource=admin`,
      // `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${
      //   process.env.DB_HOST
      // }:${
      //   process.env.DB_PORT
      // }/monify-${process.env.NODE_ENV.trim()}?authSource=admin`,
    ),
    AuthModule,
    UserModule,
    WalletModule,
    FinancialUnitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
