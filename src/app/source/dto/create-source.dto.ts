import {
  IsDate,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { SourceTypeEnum } from '../entities/sourceType.enum';

export class CreateSourceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(SourceTypeEnum)
  type: string;

  @IsOptional()
  @IsString()
  bankAccountNumber: string;

  @IsOptional()
  @IsString()
  bankCartNumber: string;

  @IsNotEmpty()
  @IsNumber()
  initialAmount: number;

  @IsOptional()
  @IsDate()
  expiredDate: Date;

  @IsOptional()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  icon: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsNotEmpty()
  @IsMongoId()
  @IsString()
  walletId: string;
}
