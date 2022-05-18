import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { SendSMSDTO } from './dto/sendSMS.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto);
  }

  @Post('send-sms')
  sendSMS(@Body() sendSMSDto: SendSMSDTO, @Res() request: Response) {
    return this.authService.sendSMS(request, sendSMSDto);
  }
}
