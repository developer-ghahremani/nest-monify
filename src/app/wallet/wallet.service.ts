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
  async create(userId: string, createWalletDto: CreateWalletDto) {
    const wallet = await this.wallet.create({
      userId,

      ...createWalletDto,
    });
    return wallet;
  }

  async findAll(userId: string) {
    const wallets = await this.wallet
      .find({ userId })
      // .populate('userId')
      .populate('financialUnitId');
    return wallets;
  }
}
