import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe<T> implements PipeTransform {
  constructor(private readonly schema: ObjectSchema<T>) {}

  async transform(value: any): Promise<T> {
    try {
      await this.schema.validateAsync(value, {
        abortEarly: false,
      });
      return value;
    } catch (error) {
      throw new BadRequestException(error.details, 'Validation Failed');
    }
  }
}
