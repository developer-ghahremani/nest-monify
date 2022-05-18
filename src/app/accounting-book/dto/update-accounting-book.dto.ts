import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountingBookDto } from './create-accounting-book.dto';

export class UpdateAccountingBookDto extends PartialType(CreateAccountingBookDto) {}
