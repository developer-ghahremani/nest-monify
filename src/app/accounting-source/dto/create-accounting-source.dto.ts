import { IsMongoId, IsNotEmpty } from 'class-validator';

import { Types } from 'mongoose';

export class CreateAccountingSourceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  initialAmount: number;

  note: string;

  bankName: string;

  bankCartNumber: string;

  bankAccountNumber: string;

  entityType: string;

  @IsNotEmpty()
  @IsMongoId()
  accountingBookId: Types.ObjectId;
}
