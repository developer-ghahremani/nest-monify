import { IsDate, IsDateString, IsOptional } from 'class-validator';

export class FindTransactionQuery {
  @IsOptional()
  sourceId: string;

  @IsOptional()
  categoryId: string;

  @IsOptional()
  limit: number;

  @IsOptional()
  type: number;

  @IsOptional()
  page: number;

  @IsOptional()
  @IsDateString()
  fromDate: Date;

  @IsOptional()
  @IsDateString()
  toDate: Date;
}
