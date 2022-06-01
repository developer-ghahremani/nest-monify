import { UpdateWalletDto } from './dto/updateWallet.dto';
import { Wallet } from './entity/wallet.entity';
import { CreateWalletDto } from './dto/createWalet.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(Wallet.name) private readonly wallet: Model<Wallet>,
  ) {}
  create(userId: string, createWalletDto: CreateWalletDto) {
    return this.wallet.create({
      userId,
      ...createWalletDto,
    });
  }

  findAll(userId: string) {
    return (
      this.wallet
        .find({ userId })
        // .populate('userId')
        .populate('financialUnitId')
    );
  }

  findOne(userId: string, _id: string) {
    return this.wallet.findOne({ userId, _id });
  }

  update(userId: string, walletId: string, updateWalletDto: UpdateWalletDto) {
    return this.wallet.findOneAndUpdate(
      {
        userId,
        _id: walletId,
      },
      updateWalletDto,
    );
  }
}
