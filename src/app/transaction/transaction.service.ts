import { Source } from './../source/entities/source.entity';
import { Wallet } from './../wallet/entity/wallet.entity';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Injectable } from '@nestjs/common';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transaction: Model<Transaction>,
    @InjectModel(Wallet.name)
    private readonly wallet: Model<Wallet>,
    @InjectModel(Source.name)
    private readonly source: Model<Source>,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const trs = await this.transaction.create({
      userId,
      createdAt: new Date(),
      ...createTransactionDto,
    });

    const source = await this.source.findOne({
      userId,
      walletId: createTransactionDto.walletId,
    });

    source.amount =
      source.amount + createTransactionDto.amount * createTransactionDto.type;
    await source.save();

    const wallet = await this.wallet.findById(createTransactionDto.walletId);
    wallet.amount =
      wallet.amount + createTransactionDto.amount * createTransactionDto.type;
    await wallet.save();

    return trs;
  }

  async findAll(params: { userId: string; walletId: string }) {
    const trs = await this.transaction
      .find(params)
      // .populate('categoryId walletId tags sourceId')
      .populate('categoryId tags sourceId')
      .sort('-createdAt');
    return trs;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
