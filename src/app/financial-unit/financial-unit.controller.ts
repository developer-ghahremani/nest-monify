import { Controller, Get, Post, Body } from '@nestjs/common';
import { FinancialUnitService } from './financial-unit.service';
import { CreateFinancialUnitDto } from './dto/create-financial-unit.dto';

@Controller('financial-unit')
export class FinancialUnitController {
  constructor(private readonly financialUnitService: FinancialUnitService) {}

  @Post()
  create(@Body() createFinancialUnitDto: CreateFinancialUnitDto) {
    return this.financialUnitService.create(createFinancialUnitDto);
  }

  @Get()
  findAll() {
    return this.financialUnitService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.financialUnitService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateFinancialUnitDto: UpdateFinancialUnitDto,
  // ) {
  //   return this.financialUnitService.update(+id, updateFinancialUnitDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.financialUnitService.remove(+id);
  // }
}
