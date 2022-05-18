import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SendSMSDTO {
  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  mobile: string;
}
