import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountingSourceDto } from './create-accounting-source.dto';

export class UpdateAccountingSourceDto extends PartialType(CreateAccountingSourceDto) {}
