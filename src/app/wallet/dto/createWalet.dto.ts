import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateWalletDto {
  @IsNotEmpty()
  @IsMongoId()
  financialUnitId: string;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  color: string;
}
