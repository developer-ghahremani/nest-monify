import { IsNumber, IsOptional, IsString } from 'class-validator';
export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  icon: string;

  @IsOptional()
  @IsNumber()
  order: number;
}
