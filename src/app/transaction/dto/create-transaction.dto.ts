import { IsEnum, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

import { TransactionTypeEnum } from '../entities/transaction.enum';

export class CreateTransactionDto {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsEnum(TransactionTypeEnum)
  type: number;

  @IsOptional()
  note: string;

  @IsOptional()
  color: string;

  @IsNotEmpty()
  @IsMongoId()
  walletId: string;

  @IsNotEmpty()
  @IsMongoId()
  sourceId: string;

  @IsNotEmpty()
  @IsMongoId()
  categoryId: string;

  @IsOptional()
  tags: string[];

  @IsOptional()
  createdAt: Date;
}
