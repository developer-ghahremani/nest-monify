import { Wallet } from './../wallet/entity/wallet.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WalletService } from '../wallet/wallet.service';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userService: Model<User>,
    @InjectModel(Wallet.name) private wallet: Model<Wallet>,
  ) {}

  findOne(params: {
    mobile?: string;
    firstname?: string;
    lastname?: string;
    _id?: string;
  }) {
    return this.userService.findOne(params);
  }

  findByIdOne(id: string) {
    return this.userService.findById(id);
  }

  create(params: {
    mobile: string;
    password: string;
    firstname?: string;
    lastname?: string;
  }) {
    return this.userService.create(params);
  }

  update(
    id: string,
    params: {
      mobile?: string;
      password?: string;
      firstName?: string;
      lastName?: string;
      birthdate?: Date;
      username?: string;
      email?: string;
    },
  ) {
    return this.userService.findByIdAndUpdate(id, {
      ...params,
      updatedAt: new Date(),
    });
  }

  async whoAmI(_id: string) {
    const user = await this.findOne({ _id });
    const wallets = await this.wallet
      .find({ userId: _id })
      .populate('financialUnitId');

    return { ...user.toObject(), wallets };
  }
}
