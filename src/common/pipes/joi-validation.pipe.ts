import {
  PipeTransform,
  Injectable,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { deletePII } from '../helpers/delete-pii.helper';

@Injectable()
export class JoiValidationPipe<T> implements PipeTransform {
  private readonly logger = new Logger(JoiValidationPipe.name);

  constructor(private readonly schema: ObjectSchema<T>) {}

  async transform(value: any): Promise<T> {
    try {
      await this.schema.validateAsync(value, {
        allowUnknown: true,
        abortEarly: false,
      });
      return value;
    } catch (error) {
      this.logger.error(`Validation error: ${error.message}`);
      this.logger.error(deletePII(value));
      throw new BadRequestException(error.details, 'Validation Failed');
    }
  }
}
