import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { FinancialUnit } from './../../financial-unit/entities/financial-unit.entity';
import { User } from './../../user/entity/user.entity';

@Schema()
export class Wallet {
  @Prop()
  name: string;

  @Prop({ ref: User.name })
  userId: User;

  @Prop()
  financialUnitId: FinancialUnit;

  @Prop()
  color: string;

  @Prop({ default: new Date() })
  createAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
