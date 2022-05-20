import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsMongoId()
  walletId: string;
}
