import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';
import { User } from 'src/app/user/entity/user.entity';
import { Wallet } from './../../wallet/entity/wallet.entity';

@Schema()
export class Category {
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  color: string;

  @Prop()
  icon: string;

  @Prop()
  type: number;

  @Prop({ default: 1 })
  order: number;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;

  @Prop({ ref: Wallet.name, type: Types.ObjectId, required: true })
  walletId: Wallet;

  @Prop({ ref: User.name, type: Types.ObjectId })
  userId: User;

  @Prop({ ref: Category.name, type: Types.ObjectId })
  parentId: Category;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
