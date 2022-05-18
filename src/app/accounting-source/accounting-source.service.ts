import { Injectable } from '@nestjs/common';
import { CreateAccountingSourceDto } from './dto/create-accounting-source.dto';
import { UpdateAccountingSourceDto } from './dto/update-accounting-source.dto';

@Injectable()
export class AccountingSourceService {
  create(createAccountingSourceDto: CreateAccountingSourceDto) {
    return 'This action adds a new accountingSource';
  }

  findAll() {
    return `This action returns all accountingSource`;
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
