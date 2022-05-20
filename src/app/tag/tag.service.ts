import { Tag } from './entities/tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { Injectable } from '@nestjs/common';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tag: Model<Tag>) {}

  async create(userId: string, createTagDto: CreateTagDto) {
    const tag = await this.tag.create({ userId, ...createTagDto });
    return tag;
  }

  async findAll(params: { userId: string; walletId: string }) {
    const tags = await this.tag.find(params);
    return tags;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
