import { Authorization } from './../../common/guard/Authorozation.guard';
import { CreateWalletDto } from './dto/createWalet.dto';
import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Request } from 'express';
import { UpdateWalletDto } from './dto/updateWallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @UseGuards(Authorization)
  @Post()
  create(@Req() request: Request, @Body() createWallet: CreateWalletDto) {
    return this.walletService.create(request.user._id, createWallet);
  }

  @UseGuards(Authorization)
  @Get()
  finAll(@Req() request: Request) {
    return this.walletService.findAll(request.user._id);
  }

  @UseGuards(Authorization)
  @Get(':walletId')
  finOne(@Req() request: Request, @Param() params: { walletId: string }) {
    return this.walletService.findOne(request.user._id, params.walletId);
  }

  @UseGuards(Authorization)
  @Patch(':walletId')
  update(
    @Req() request: Request,
    @Param() params: { walletId: string },
    @Body() updateWalletDto: UpdateWalletDto,
  ) {
    return this.walletService.update(
      request.user._id,
      params.walletId,
      updateWalletDto,
    );
  }
}
