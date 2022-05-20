import { Source, SourceSchema } from './entities/source.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';
import { UserModule } from './../user/user.module';

@Module({
  controllers: [SourceController],
  providers: [SourceService],
  imports: [
    MongooseModule.forFeature([{ name: Source.name, schema: SourceSchema }]),
    UserModule,
  ],
})
export class SourceModule {}
