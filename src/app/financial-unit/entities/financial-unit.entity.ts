import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FinancialUnit {
  @Prop()
  name: string;
  @Prop()
  symbol: string;
  @Prop()
  icon: string;
  @Prop({ default: new Date() })
  createdAt: Date;
  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const FinancialUnitSchema = SchemaFactory.createForClass(FinancialUnit);
