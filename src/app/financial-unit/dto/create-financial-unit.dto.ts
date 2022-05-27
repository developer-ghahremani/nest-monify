import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFinancialUnitDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsString()
  icon: string;
}