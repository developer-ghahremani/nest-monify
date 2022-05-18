import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class AccountingBook {
  @Prop({ required: true })
  title: string;

  @Prop()
  userId: string;

  @Prop()
  financialUnit: string;

  @Prop({ type: MongooseSchema.Types.Date, default: new Date() })
  createdAt: Date;

  @Prop({ type: MongooseSchema.Types.Date, default: new Date() })
  updatedAt: Date;
}

export const AccountingBookSchema =
  SchemaFactory.createForClass(AccountingBook);
