import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { FinancialUnit } from './../../financial-unit/entities/financial-unit.entity';
import { Types } from 'mongoose';
import { User } from './../../user/entity/user.entity';

@Schema()
export class Wallet {
  @Prop()
  name: string;

  @Prop({ ref: User.name, type: Types.ObjectId })
  userId: User;

  @Prop({ ref: FinancialUnit.name, type: Types.ObjectId })
  financialUnitId: FinancialUnit;

  @Prop()
  color: string;

  @Prop({ default: new Date() })
  createAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
