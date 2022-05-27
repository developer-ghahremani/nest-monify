import { User, UserSchema } from './entity/user.entity';
import { Wallet, WalletSchema } from '../wallet/entity/wallet.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Wallet.name, schema: WalletSchema },
    ]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
