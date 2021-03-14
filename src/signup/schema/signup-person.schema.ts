import { SignupPersonDto } from '../../common/interfaces/signup-person.interface';
import Joi from 'joi';
import { MAJORS } from '../constants';

export const SignupPersonSchema = Joi.object<SignupPersonDto>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/, 'numbers')
    .required(),

  state: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required(),
  allocation: Joi.string().uuid({ version: 'uuidv4' }).allow('', 'undefined'),
  universityMajor: Joi.string().valid(...MAJORS, 'Otra'),
  semester: Joi.string().required(),
  referral: Joi.string().required(), // TODO: Further validation
  sdg: Joi.string().pattern(/^[0-9]+$/, 'numbers'),
  comments: Joi.string().allow(''),
});
