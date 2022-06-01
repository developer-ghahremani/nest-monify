import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { CategoryType } from '../entities/categotyType.enum';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsMongoId()
  walletId: string;

  @IsNotEmpty()
  @IsEnum(CategoryType)
  type: number;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  icon: string;

  @IsOptional()
  order: number;

  @IsOptional()
  @IsMongoId()
  parentId: string;

  @IsOptional()
  @IsBoolean()
  isDefault: boolean;
}
