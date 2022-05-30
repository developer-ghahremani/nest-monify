import { Authorization } from 'src/common/guard/Authorozation.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Request } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(Authorization)
  @Post()
  create(
    @Req() request: Request,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoryService.create(request.user._id, createCategoryDto);
  }

  @UseGuards(Authorization)
  @Get(':walletId')
  findAll(@Req() request: Request, @Param('walletId') walletId: string) {
    return this.categoryService.findAll(request.user._id, walletId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoryService.remove(+id);
  // }
}
