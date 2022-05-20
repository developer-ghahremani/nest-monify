import { Tag, TagSchema } from './entities/tag.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
  ],
})
export class TagModule {}
