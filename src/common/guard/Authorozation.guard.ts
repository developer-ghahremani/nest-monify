import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Jwt } from '../helper/jwt';
import { Request } from 'express';
import { UserService } from './../../app/user/user.service';

@Injectable()
export class Authorization implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req: Request = context.switchToHttp().getRequest();
      const token = req.headers.authorization;

      if (!token) throw new Error('Token not exists');
      const user = new Jwt().verifyUserToken(token.replace('Bearer ', ''));
      if (!user) throw new Error('Token not valid');

      const u = await this.userService.findByIdOne(user['_id']);
      req.user = {
        _id: u._id.toString(),
        firstname: u.firstname,
        lastname: u.lastname,
      };

      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
