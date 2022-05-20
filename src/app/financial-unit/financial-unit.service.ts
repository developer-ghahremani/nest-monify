import { FinancialUnit } from './entities/financial-unit.entity';
import { CreateFinancialUnitDto } from './dto/create-financial-unit.dto';
import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FinancialUnitService {
  constructor(
    @InjectModel(FinancialUnit.name)
    private readonly financialUni: Model<FinancialUnit>,
  ) {}

  async create(createFinancialUnitDto: CreateFinancialUnitDto) {
    const financialUnit = await this.financialUni.create(
      createFinancialUnitDto,
    );
    return financialUnit;
  }

  async findAll() {
    const financialUnits = await this.financialUni.find();
    return financialUnits;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} financialUnit`;
  // }

  // update(id: number, updateFinancialUnitDto: UpdateFinancialUnitDto) {
  //   return `This action updates a #${id} financialUnit`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} financialUnit`;
  // }
}
