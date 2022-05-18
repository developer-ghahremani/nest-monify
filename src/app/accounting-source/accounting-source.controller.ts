import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Authorization } from 'src/common/guard/Authorozation.guard';
import { AccountingSourceService } from './accounting-source.service';
import { CreateAccountingSourceDto } from './dto/create-accounting-source.dto';
import { UpdateAccountingSourceDto } from './dto/update-accounting-source.dto';

@Controller('accounting-source')
export class AccountingSourceController {
  constructor(
    private readonly accountingSourceService: AccountingSourceService,
  ) {}

  @Post()
  @UseGuards(Authorization)
  create(
    @Req() request: Request,
    @Body() createAccountingSourceDto: CreateAccountingSourceDto,
  ) {
    return this.accountingSourceService.create(
      request.user._id,
      createAccountingSourceDto,
    );
  }

  @UseGuards(Authorization)
  @Get()
  findAll(@Req() request: Request) {
    return this.accountingSourceService.findAll(request.user._id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountingSourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountingSourceDto: UpdateAccountingSourceDto,
  ) {
    return this.accountingSourceService.update(+id, updateAccountingSourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountingSourceService.remove(+id);
  }
}
