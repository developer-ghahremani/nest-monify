import { FindTransactionQuery } from './dto/find-transaction.dto';
import { Source } from './../source/entities/source.entity';
import { Wallet } from './../wallet/entity/wallet.entity';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Injectable } from '@nestjs/common';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';

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

    const source = await this.source.findById(createTransactionDto.sourceId);

    source.amount =
      source.amount + createTransactionDto.amount * createTransactionDto.type;
    await source.save();

    const wallet = await this.wallet.findById(createTransactionDto.walletId);
    wallet.amount =
      wallet.amount + createTransactionDto.amount * createTransactionDto.type;
    await wallet.save();

    return trs;
  }

  async findAll(
    userId: string,
    walletId: string,
    findTrsQuery: FindTransactionQuery,
  ) {
    const {
      sourceId = '',
      categoryId = '',
      page = 0,
      limit = 10,
      type,
      fromDate,
      toDate,
    } = findTrsQuery;

    let sourceFilter = [];
    let categoryFilter = [];

    const filter: any = {
      userId,
      walletId,
      createdAt: {
        $gt: moment().add(-7, 'days').toISOString(),
        $lt: moment(),
      },
    };

    if (type == 1 || type == -1) filter.type = type;

    if (sourceId)
      sourceFilter = sourceId
        .split(',')
        .filter((i) => i)
        .map((item) => ({ sourceId: item }));

    if (categoryId)
      categoryFilter = categoryId
        .split(',')
        .filter((i) => i)
        .map((item) => ({ categoryId: item }));

    if (sourceFilter.length > 0 && categoryFilter.length === 0)
      filter.$or = sourceFilter;
    if (categoryFilter.length > 0 && sourceFilter.length === 0)
      filter.$or = categoryFilter;
    if (sourceFilter.length > 0 && categoryFilter.length > 0)
      filter.$and = [{ $or: categoryFilter }, { $or: sourceFilter }];

    if (fromDate) filter.createdAt['$gt'] = fromDate;
    if (toDate) filter.createdAt['$lt'] = toDate;

    console.log(filter, 'filter');

    const trs = await this.transaction.find(
      filter,
      {},
      {
        limit,
        skip: page * limit,
        sort: ['-createdAt'],
        populate: 'categoryId tags sourceId',
      },
    );

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
