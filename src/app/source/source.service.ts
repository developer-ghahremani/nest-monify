import { CreateSourceDto } from './dto/create-source.dto';
import { Injectable } from '@nestjs/common';
import { UpdateSourceDto } from './dto/update-source.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Source } from './entities/source.entity';
import { Model } from 'mongoose';

@Injectable()
export class SourceService {
  constructor(@InjectModel(Source.name) private source: Model<Source>) {}

  async create(
    userId: string,
    { initialAmount, ...createSourceDto }: CreateSourceDto,
  ) {
    const source = await this.source.create({
      userId,
      amount: initialAmount,
      ...createSourceDto,
    });
    return source;
  }

  async findAll(params: { walletId?: string; userId: string }) {
    const sources = await this.source.find(params).populate('walletId');
    return sources;
  }

  findOne(id: number) {
    return `This action returns a #${id} source`;
  }

  update(id: number, updateSourceDto: UpdateSourceDto) {
    return `This action updates a #${id} source`;
  }

  remove(id: number) {
    return `This action removes a #${id} source`;
  }
}
