import { Authorization } from 'src/common/guard/Authorozation.guard';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Param,
} from '@nestjs/common';
import { SourceService } from './source.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { Request } from 'express';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @UseGuards(Authorization)
  @Post()
  create(@Req() request: Request, @Body() createSourceDto: CreateSourceDto) {
    return this.sourceService.create(request.user._id, createSourceDto);
  }

  @UseGuards(Authorization)
  @Get(':walletId')
  findAll(@Req() request: Request, @Param('walletId') walletId: string) {
    return this.sourceService.findAll({ userId: request.user._id, walletId });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sourceService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSourceDto: UpdateSourceDto) {
  //   return this.sourceService.update(+id, updateSourceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sourceService.remove(+id);
  // }
}
