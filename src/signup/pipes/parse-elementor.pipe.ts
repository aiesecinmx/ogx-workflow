import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseElementorPipe implements PipeTransform {
  transform(obj: any) {
    // TODO: Add product
    return Object.fromEntries(
      Object.values(obj?.fields).map(({ id, value }) => [id, value])
    );
  }
}
