import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';
import { User } from 'src/app/user/entity/user.entity';
import { Wallet } from './../../wallet/entity/wallet.entity';

@Schema()
export class Tag {
  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop({ ref: User.name, type: Types.ObjectId })
  userId: User;

  @Prop({ ref: Wallet.name, type: Types.ObjectId })
  walletId: Wallet;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updateAt: Date;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
