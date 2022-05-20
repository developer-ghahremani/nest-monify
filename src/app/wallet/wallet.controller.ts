import { Authorization } from './../../common/guard/Authorozation.guard';
import { CreateWalletDto } from './dto/createWalet.dto';
import { Body, Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Request } from 'express';

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
}
