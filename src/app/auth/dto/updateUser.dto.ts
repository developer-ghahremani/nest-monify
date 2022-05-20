import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  lastName?: string;

  @IsOptional()
  @IsDate()
  birthdate?: Date;

  @IsOptional()
  @MaxLength(20)
  @IsString()
  username?: string;

  @IsOptional()
  @MaxLength(30)
  @IsString()
  @IsEmail()
  email?: string;
}
