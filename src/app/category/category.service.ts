import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private category: Model<Category>) {}

  async create(userId: string, createCategoryDto: CreateCategoryDto) {
    const category = await this.category.create({
      userId,
      ...createCategoryDto,
    });
    return category;
  }

  bulkInsert(userId: string, createCategoryDtos: CreateCategoryDto[]) {
    return this.category.insertMany(
      createCategoryDtos.map((item, order) => ({ ...item, userId, order })),
    );
  }

  async findAll(userId: string, walletId: string) {
    const categories = await this.category
      .find({
        userId,
        walletId,
      })
      .populate('parentId');
    const temp = categories.filter((item) => !item.parentId);
    const categoryWithChildren = temp.map((item) => {
      const t = categories.filter((i) => {
        // console.log(item._id.toString(), i.parentId?._id.toString());

        return i.parentId && i.parentId._id.toString() === item._id.toString();
      });

      return { ...item.toObject(), children: t.map((item) => item.toObject()) };
    });
    return categoryWithChildren;
  }

  findOne(userId: string, walletId: string, type: number) {
    return this.category.findOne({ userId, walletId, type });
  }

  async update(
    userId: string,
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    const category = await this.category.findOneAndUpdate(
      { _id: id, userId },
      updateCategoryDto,
    );
    return { ...category.toObject(), ...updateCategoryDto };
  }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
