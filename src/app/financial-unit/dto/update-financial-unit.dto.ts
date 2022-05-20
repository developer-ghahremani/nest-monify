import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialUnitDto } from './create-financial-unit.dto';

export class UpdateFinancialUnitDto extends PartialType(CreateFinancialUnitDto) {}
