import { Password } from './../../common/helper/password';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userService: Model<User>) {}

  findOne(params: { mobile?: string; firstname?: string; lastname?: string }) {
    return this.userService.findOne(params);
  }

  create(params: {
    mobile: string;
    password: string;
    firstname?: string;
    lastname?: string;
  }) {
    return this.userService.create(params);
  }

  update(
    id: string,
    params: {
      mobile?: string;
      password?: string;
      firstname?: string;
      lastname?: string;
    },
  ) {
    return this.userService.findByIdAndUpdate(id, {
      ...params,
      updatedAt: new Date(),
    });
  }
}
