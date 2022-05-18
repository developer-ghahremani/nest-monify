import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User } from './../../user/entity/user.entity';

@Schema()
export class AccountingBook extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: User;

  @Prop()
  financialUnit: string;

  @Prop({ type: MongooseSchema.Types.Date, default: new Date() })
  createdAt: Date;

  @Prop({ type: MongooseSchema.Types.Date, default: new Date() })
  updatedAt: Date;
}

export const AccountingBookSchema =
  SchemaFactory.createForClass(AccountingBook);
