import {
  FinancialUnit,
  FinancialUnitSchema,
} from './entities/financial-unit.entity';

import { FinancialUnitController } from './financial-unit.controller';
import { FinancialUnitService } from './financial-unit.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FinancialUnitController],
  providers: [FinancialUnitService],
  imports: [
    MongooseModule.forFeature([
      { name: FinancialUnit.name, schema: FinancialUnitSchema },
    ]),
  ],
})
export class FinancialUnitModule {}
