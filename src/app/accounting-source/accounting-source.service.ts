import {
  AccountingBook,
  AccountingBookSchema,
} from './../accounting-book/entities/accounting-book.entity';
import { AccountingSource } from './entities/accounting-source.entity';
import { CreateAccountingSourceDto } from './dto/create-accounting-source.dto';
import { Injectable } from '@nestjs/common';
import { UpdateAccountingSourceDto } from './dto/update-accounting-source.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccountingSourceService {
  constructor(
    @InjectModel(AccountingSource.name)
    private readonly accountingSource: Model<AccountingSource>,
    @InjectModel(AccountingBook.name)
    private readonly accountingBook: Model<AccountingBook>,
  ) {}
  async create(
    userId: string,
    createAccountingSourceDto: CreateAccountingSourceDto,
  ) {
    const accountingSource = await this.accountingSource.create({
      ...createAccountingSourceDto,
      userId,
    });
    return accountingSource;
  }

  async findAll(userId: string) {
    const accountingSources = await this.accountingSource
      .find({ userId })
      .populate('accountingBookId', '', this.accountingBook);

    return accountingSources;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountingSource`;
  }

  update(id: number, updateAccountingSourceDto: UpdateAccountingSourceDto) {
    return `This action updates a #${id} accountingSource`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountingSource`;
  }
}
