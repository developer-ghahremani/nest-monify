import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Authorization } from 'src/common/guard/Authorozation.guard';
import { AccountingBookService } from './accounting-book.service';
import { CreateAccountingBookDto } from './dto/create-accounting-book.dto';
import { UpdateAccountingBookDto } from './dto/update-accounting-book.dto';

@Controller('accounting-book')
export class AccountingBookController {
  constructor(private readonly accountingBookService: AccountingBookService) {}

  @Post()
  create(@Body() createAccountingBookDto: CreateAccountingBookDto) {
    return this.accountingBookService.create(createAccountingBookDto);
  }

  @UseGuards(Authorization)
  @Get()
  findAll() {
    return this.accountingBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountingBookService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountingBookDto: UpdateAccountingBookDto,
  ) {
    return this.accountingBookService.update(+id, updateAccountingBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountingBookService.remove(+id);
  }
}
