import { TransactionService } from './../transaction/transaction.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { Injectable } from '@nestjs/common';
import { UpdateSourceDto } from './dto/update-source.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Source } from './entities/source.entity';
import { Model } from 'mongoose';
import { CategoryService } from '../category/category.service';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel(Source.name) private source: Model<Source>, // @InjectModel(Wallet.name) private wallet: Model<Wallet>,
    private readonly trsService: TransactionService,
    private readonly categoryService: CategoryService,
  ) {}

  async create(
    userId: string,
    { initialAmount, walletId, ...createSourceDto }: CreateSourceDto,
  ) {
    const source = await this.source.create({
      userId,
      amount: 0,
      walletId,
      ...createSourceDto,
    });

    const c = await this.categoryService.findOne(userId, walletId, 1);
    await this.trsService.create(userId, {
      amount: initialAmount,
      categoryId: c._id,
      color: '',
      note: '',
      sourceId: source._id.toString(),
      tags: [],
      walletId,
      type: 1,
      createdAt: new Date(),
    });
    // const w = await this.walletService.findOne(walletId);

    // w.amount = w.amount + initialAmount;

    // await w.save();
    return source;
  }

  async findAll(params: { walletId?: string; userId: string }) {
    const sources = await this.source.find(params).populate('walletId');
    return sources;
  }

  findOne(id: number) {
    return `This action returns a #${id} source`;
  }

  update(id: number, updateSourceDto: UpdateSourceDto) {
    return `This action updates a #${id} source`;
  }

  remove(id: number) {
    return `This action removes a #${id} source`;
  }
}
