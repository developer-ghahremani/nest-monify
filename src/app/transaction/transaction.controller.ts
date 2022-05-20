import { Authorization } from 'src/common/guard/Authorozation.guard';
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
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { request } from 'http';
import { Request } from 'express';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(Authorization)
  @Post()
  create(
    @Req() request: Request,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionService.create(
      request.user._id,
      createTransactionDto,
    );
  }

  @UseGuards(Authorization)
  @Get(':walletId')
  findAll(@Req() request: Request, @Param('walletId') walletId: string) {
    return this.transactionService.findAll({
      userId: request.user._id,
      walletId,
    });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.transactionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTransactionDto: UpdateTransactionDto,
  // ) {
  //   return this.transactionService.update(+id, updateTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transactionService.remove(+id);
  // }
}
