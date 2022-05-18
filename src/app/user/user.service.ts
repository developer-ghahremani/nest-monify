import { AccountingBook } from 'src/app/accounting-book/entities/accounting-book.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userService: Model<User>,
    @InjectModel(AccountingBook.name)
    private accountingBook: Model<AccountingBook>,
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
      firstname?: string;
      lastname?: string;
    },
  ) {
    return this.userService.findByIdAndUpdate(id, {
      ...params,
      updatedAt: new Date(),
    });
  }

  async whoAmI(_id: string) {
    const user = await this.findOne({ _id });
    const accountingBooks = await this.accountingBook.find({ userId: _id });
    return { ...user.toObject(), accountingBooks };
  }
}
