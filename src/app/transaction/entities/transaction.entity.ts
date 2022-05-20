import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Category } from './../../category/entities/category.entity';
import { Source } from 'src/app/source/entities/source.entity';
import { Tag } from 'src/app/tag/entities/tag.entity';
import { Types } from 'mongoose';
import { User } from 'src/app/user/entity/user.entity';
import { Wallet } from './../../wallet/entity/wallet.entity';

@Schema()
export class Transaction {
  @Prop()
  amount: number;

  @Prop()
  type: number;

  @Prop()
  note: string;

  @Prop()
  color: string;

  @Prop({ ref: User.name, type: Types.ObjectId })
  userId: User;

  @Prop({ ref: Wallet.name, type: Types.ObjectId })
  walletId: Wallet;

  @Prop({ ref: Source.name, type: Types.ObjectId })
  sourceId: Source;

  @Prop({ ref: Category.name, type: Types.ObjectId })
  categoryId: Category;

  @Prop({ ref: Tag.name, type: [Types.ObjectId] })
  tags: Tag[];

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
