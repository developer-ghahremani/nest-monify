import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Jwt } from './../../common/helper/jwt';
import { LoginDTO } from './dto/login.dto';
import { Password } from './../../common/helper/password';
import { Response } from 'express';
import { SendSMSDTO } from './dto/sendSMS.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userServicre: UserService) {}

  async login(loginDto: LoginDTO) {
    try {
      const user = await this.userServicre.findOne({ mobile: loginDto.mobile });
      if (!user) throw new UnauthorizedException();
      const isVerified = await new Password().comparePass(
        loginDto.password,
        user.password,
      );

      if (!isVerified) throw new UnauthorizedException();
      const token = new Jwt().generateUserToken(user.toObject());
      return { ...user.toObject(), token };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  async sendSMS(response: Response, sendSMSDto: SendSMSDTO) {
    try {
      const user = await this.userServicre.findOne({
        mobile: sendSMSDto.mobile,
      });
      const smsCode = Math.floor(Math.random() * 1000000);
      const hashed = await new Password().hashPass(smsCode.toString());
      console.log(smsCode);

      if (!user) {
        const createdUser = await this.userServicre.create({
          mobile: sendSMSDto.mobile,
          password: hashed,
        });
        return response.status(201).send(createdUser);
      }
      const updateUser = await this.userServicre.update(
        user['_id'].toString(),
        {
          password: hashed,
        },
      );
      return response.status(200).send(updateUser);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
