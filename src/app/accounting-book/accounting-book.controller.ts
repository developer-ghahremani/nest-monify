import { Request } from 'express';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Authorization } from 'src/common/guard/Authorozation.guard';
import { AccountingBookService } from './accounting-book.service';
import { CreateAccountingBookDto } from './dto/create-accounting-book.dto';
import { UpdateAccountingBookDto } from './dto/update-accounting-book.dto';

@Controller('accounting-book')
export class AccountingBookController {
  constructor(private readonly accountingBookService: AccountingBookService) {}

  @Post()
  @UseGuards(Authorization)
  create(
    @Req() request: Request,
    @Body() createAccountingBookDto: CreateAccountingBookDto,
  ) {
    return this.accountingBookService.create(
      request.user?._id,
      createAccountingBookDto,
    );
  }

  @Get()
  @UseGuards(Authorization)
  findAll(@Req() request: Request) {
    return this.accountingBookService.findAll(request.user._id);
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
