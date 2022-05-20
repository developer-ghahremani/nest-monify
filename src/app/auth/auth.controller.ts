import { UpdateUserDto } from './dto/updateUser.dto';
import { Authorization } from 'src/common/guard/Authorozation.guard';
import {
  Body,
  Controller,
  Post,
  Res,
  Get,
  UseGuards,
  Req,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { SendSMSDTO } from './dto/sendSMS.dto';
import { Response, Request } from 'express';

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

  @UseGuards(Authorization)
  @Get('who-am-i')
  whoAmI(@Req() req: Request) {
    return this.authService.whoApI(req.user._id);
  }

  @UseGuards(Authorization)
  @Patch()
  update(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(request.user._id, updateUserDto);
  }
}
