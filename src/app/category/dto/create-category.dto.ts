import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { CategoryType } from './../entities/categotyType.enym';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  icon: string;

  @IsNotEmpty()
  @IsEnum(CategoryType)
  type: number;

  @IsOptional()
  order: number;

  @IsNotEmpty()
  @IsMongoId()
  walletId: string;

  @IsOptional()
  @IsMongoId()
  parentId: string;
}
