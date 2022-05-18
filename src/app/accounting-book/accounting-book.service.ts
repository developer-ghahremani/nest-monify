import { Injectable } from '@nestjs/common';
import { CreateAccountingBookDto } from './dto/create-accounting-book.dto';
import { UpdateAccountingBookDto } from './dto/update-accounting-book.dto';

@Injectable()
export class AccountingBookService {
  create(createAccountingBookDto: CreateAccountingBookDto) {
    return 'This action adds a new accountingBook';
  }

  findAll() {
    return `This action returns all accountingBook`;
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
