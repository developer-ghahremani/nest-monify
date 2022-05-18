import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends mongoose.Document {
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop({ unique: true, required: true })
  mobile: string;
  @Prop()
  password: string;
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date;
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date;

  @Prop({ type: mongoose.Types.ObjectId })
  accountingBookId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
