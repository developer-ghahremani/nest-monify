import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAccountingBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  financialUnit?: string;
}
