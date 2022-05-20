import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({ unique: true, required: true })
  mobile: string;
  @Prop()
  password: string;
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  birthdate: Date;
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date;
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
