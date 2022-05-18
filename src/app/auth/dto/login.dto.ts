import {
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  @MinLength(11)
  mobile: string;

  @IsNotEmpty()
  @Length(6, 6)
  @IsString()
  password: string;
}
