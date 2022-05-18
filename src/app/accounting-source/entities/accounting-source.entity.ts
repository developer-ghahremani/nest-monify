import {
  AccountingBook,
  AccountingBookSchema,
} from './../../accounting-book/entities/accounting-book.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class AccountingSource {
  @Prop({ required: true })
  title: string;
  @Prop()
  amount: number;
  @Prop()
  initialAmount: number;
  @Prop()
  note: string;
  @Prop()
  bankName: string;
  @Prop()
  bankCartNumber: string;
  @Prop()
  bankAccountNumber: string;
  @Prop()
  entityType: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
  @Prop()
  userId: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: AccountingBook.name })
  accountingBookId: AccountingBook;
}

export const AccountingSourceSchema =
  SchemaFactory.createForClass(AccountingSource);
