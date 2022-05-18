import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountingSourceService } from './accounting-source.service';
import { CreateAccountingSourceDto } from './dto/create-accounting-source.dto';
import { UpdateAccountingSourceDto } from './dto/update-accounting-source.dto';

@Controller('accounting-source')
export class AccountingSourceController {
  constructor(private readonly accountingSourceService: AccountingSourceService) {}

  @Post()
  create(@Body() createAccountingSourceDto: CreateAccountingSourceDto) {
    return this.accountingSourceService.create(createAccountingSourceDto);
  }

  @Get()
  findAll() {
    return this.accountingSourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountingSourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountingSourceDto: UpdateAccountingSourceDto) {
    return this.accountingSourceService.update(+id, updateAccountingSourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountingSourceService.remove(+id);
  }
}
