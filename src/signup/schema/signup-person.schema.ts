import { LANGUAGE_FLUENCY, MAJORS } from '../constants';
import {
  AllocationInfo,
  SignupPersonDto,
} from '../../common/interfaces/signup-person.interface';
import Joi from 'joi';

const AllocationSchema = Joi.object<AllocationInfo>({
  campus: Joi.string().uuid({ version: 'uuidv4' }).required(),
  product: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
});

export const SignupPersonSchema = Joi.object<SignupPersonDto>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),

  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/, 'numbers')
    .required(),

  allocationInfo: AllocationSchema.required(),

  epInfo: Joi.object({
    major: Joi.string().valid(...MAJORS),
    englishFluency: Joi.string().valid(...LANGUAGE_FLUENCY),
  }),
});
