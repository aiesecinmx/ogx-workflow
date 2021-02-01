import { JoiValidationPipe } from './joi-validation.pipe';
import { object } from 'joi';

describe('JoiValidationPipe', () => {
  it('should be defined', () => {
    expect(new JoiValidationPipe(object())).toBeDefined();
  });
});
