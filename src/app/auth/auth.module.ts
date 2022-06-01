import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CategoryModule } from './../category/category.module';
import { FinancialUnitModule } from './../financial-unit/financial-unit.module';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { WalletModule } from './../wallet/wallet.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserModule, FinancialUnitModule, WalletModule, CategoryModule],
})
export class AuthModule {}
