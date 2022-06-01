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
  Query,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { request } from 'http';
import { Request } from 'express';
import { FindTransactionQuery } from './dto/find-transaction.dto';

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
  findAll(
    @Req() request: Request,
    @Param('walletId') walletId: string,
    @Query() query: FindTransactionQuery,
  ) {
    return this.transactionService.findAll(request.user._id, walletId, query);
  }
}
