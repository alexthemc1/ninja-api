import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-ninja.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}
