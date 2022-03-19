import { JoiValidationPipe } from './joi-validation.pipe';
import { SignupPersonSchema } from '../../signup/schema/signup-person.schema';

describe('JoiValidationPipe', () => {
  it('should be defined', () => {
    expect(new JoiValidationPipe(SignupPersonSchema)).toBeDefined();
  });

  describe('should allow valid signup schema', () => {
    it('should signup people with semester', () => {
      const signup = {
        allocation: '9a300e10-40d8-4c2e-b4f1-edb2d7010571',
        comments: '',
        email: 'test@example.com',
        field_af8200c: '',
        firstName: 'Test',
        gdpr: '',
        lastName: 'AIESEC',
        password: 'password123',
        phone: '5555555555',
        referral: 'Soy Miembro de AIESEC',
        sdgs: '16',
        semester: 'Ya me gradué',
        state: '27',
        universityMajor: 'Ingenierías',
      };
  
      return expect(
        new JoiValidationPipe(SignupPersonSchema).transform(signup)
      ).resolves.toEqual(signup);
    });

    it('should signup people without semester', () => {
      const signup = {
        allocation: '9a300e10-40d8-4c2e-b4f1-edb2d7010571',
        comments: '',
        email: 'test@example.com',
        field_af8200c: '',
        firstName: 'Test',
        gdpr: '',
        lastName: 'AIESEC',
        password: 'password123',
        phone: '5555555555',
        referral: 'Soy Miembro de AIESEC',
        sdgs: '16',
        state: '27',
        universityMajor: 'Ingenierías',
      };
  
      return expect(
        new JoiValidationPipe(SignupPersonSchema).transform(signup)
      ).resolves.toEqual(signup);
    });
  });
});
