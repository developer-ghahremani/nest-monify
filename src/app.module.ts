import { AccountingBookModule } from './app/accounting-book/accounting-book.module';
import { AccountingSourceModule } from './app/accounting-source/accounting-source.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${
        process.env.DB_HOST
      }:${
        process.env.DB_PORT
      }/monify-${process.env.NODE_ENV.trim()}?authSource=admin`,
    ),
    AuthModule,
    UserModule,
    AccountingBookModule,
    AccountingSourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
