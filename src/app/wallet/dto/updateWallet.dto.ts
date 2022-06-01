import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateWalletDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsMongoId()
  financialUnitId: string;
}
