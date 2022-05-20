import { Authorization } from 'src/common/guard/Authorozation.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Request } from 'express';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(Authorization)
  @Post()
  create(@Req() request: Request, @Body() createTagDto: CreateTagDto) {
    return this.tagService.create(request.user._id, createTagDto);
  }

  @UseGuards(Authorization)
  @Get(':walletId')
  findAll(@Req() request: Request, @Param('walletId') walletId: string) {
    return this.tagService.findAll({ userId: request.user._id, walletId });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tagService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
  //   return this.tagService.update(+id, updateTagDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tagService.remove(+id);
  // }
}
