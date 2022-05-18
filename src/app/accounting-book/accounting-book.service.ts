import { User } from './../user/entity/user.entity';
import { AccountingBook } from './entities/accounting-book.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAccountingBookDto } from './dto/create-accounting-book.dto';
import { UpdateAccountingBookDto } from './dto/update-accounting-book.dto';
import { Model } from 'mongoose';

@Injectable()
export class AccountingBookService {
  constructor(
    @InjectModel(AccountingBook.name)
    private readonly accountingBook: Model<AccountingBook>,
  ) {}

  async create(
    userId: string,
    createAccountingBookDto: CreateAccountingBookDto,
  ) {
    const accountingBook = await this.accountingBook.create({
      ...createAccountingBookDto,
      userId,
    });
    return accountingBook;
  }

  async findAll(userId: string) {
    const accountingBooks = await this.accountingBook.find({ userId });

    return accountingBooks;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountingBook`;
  }

  update(id: number, updateAccountingBookDto: UpdateAccountingBookDto) {
    return `This action updates a #${id} accountingBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountingBook`;
  }
}
