import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { CategoryService } from '../category/category.service';
import { FinancialUnitService } from './../financial-unit/financial-unit.service';
import { Jwt } from './../../common/helper/jwt';
import { LoginDTO } from './dto/login.dto';
import { Password } from './../../common/helper/password';
import { Response } from 'express';
import { SendSMSDTO } from './dto/sendSMS.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from '../user/user.service';
import { WalletService } from '../wallet/wallet.service';
import { random } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private readonly userServicre: UserService,
    private readonly financialUnitService: FinancialUnitService,
    private readonly walletService: WalletService,
    private readonly categoryService: CategoryService,
  ) {}

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
      const smsCode = random(100000, 999999);
      const hashed = await new Password().hashPass(smsCode.toString());
      console.log(smsCode);

      if (!user) {
        const createdUser = await this.userServicre.create({
          mobile: sendSMSDto.mobile,
          password: hashed,
        });
        const financialUnits = await this.financialUnitService.findAll();
        const w = await this.walletService.create(createdUser._id.toString(), {
          financialUnitId: financialUnits[0]._id.toString(),
          name: 'دفتر خرج شخصی',
          color: '',
        });

        await this.categoryService.bulkInsert(createdUser._id.toString(), [
          {
            name: 'مبلغ اولیه افتتاح حساب',
            color: '',
            icon: '',
            order: 0,
            type: 1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: true,
          },
          {
            name: 'حقوق',
            color: '',
            icon: '',
            order: 0,
            type: 1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'قرض',
            color: '',
            icon: '',
            order: 0,
            type: 1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'وام',
            color: '',
            icon: '',
            order: 0,
            type: 1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'قسط',
            color: '',
            icon: '',
            order: 0,
            type: -1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'خرید منزل',
            color: '',
            icon: '',
            order: 0,
            type: -1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'حمل و نقل',
            color: '',
            icon: '',
            order: 0,
            type: -1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'پوشاک',
            color: '',
            icon: '',
            order: 0,
            type: -1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
          {
            name: 'پرداخت قبوض',
            color: '',
            icon: '',
            order: 0,
            type: -1,
            walletId: w._id.toString(),
            parentId: null,
            isDefault: false,
          },
        ]);

        return response.status(201).send(createdUser);
      }
      const updateUser = await this.userServicre.updatePassword(
        user._id.toString(),
        {
          password: hashed,
        },
      );
      return response.status(200).send(updateUser);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  whoApI(userId: string) {
    return this.userServicre.whoAmI(userId);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userServicre.update(id, updateUserDto);
    return { ...user.toObject(), ...updateUserDto };
  }
}
