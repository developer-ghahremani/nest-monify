import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';
import { User } from './../../user/entity/user.entity';
import { Wallet } from './../../wallet/entity/wallet.entity';

@Schema()
export class Source {
  @Prop({ required: true })
  name: string;

  @Prop()
  type: string;

  @Prop()
  bankAccountNumber: string;

  @Prop()
  bankCartNumber: string;

  @Prop()
  initialAmount: number;

  @Prop()
  amount: number;

  @Prop()
  expiredDate: Date;

  @Prop()
  code: string;

  @Prop()
  icon: string;

  @Prop()
  note: string;

  @Prop({ ref: Wallet.name, type: Types.ObjectId })
  walletId: Wallet;

  @Prop({ ref: User.name, type: Types.ObjectId })
  userId: User;
}

export const SourceSchema = SchemaFactory.createForClass(Source);
