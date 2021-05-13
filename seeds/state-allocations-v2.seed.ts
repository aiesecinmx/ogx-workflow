import { Product } from 'src/common/entities/product';
import { State } from 'src/common/entities/state';

type StateAllocationSeed = {
  state: State['name'];
  denomination: string;
  productMapping: Record<Product['shortName'], string>;
};

export const StateAllocationSeedsV2: StateAllocationSeed[] = [
  {
    state: 'Guanajuato',
    denomination: 'Irapuato',
    productMapping: {
      GV: 'Irapuato',
      GTa: 'Irapuato',
      GTe: 'León',
    },
  },
  {
    state: 'Ciudad de México',
    denomination: 'CDMX - Norte',
    productMapping: {
      GV: 'IPN',
      GTa: 'IPN',
      GTe: 'UNAM',
    },
  },
  {
    state: 'Ciudad de México',
    denomination: 'CDMX - Centro',
    productMapping: {
      GV: 'La Salle',
      GTa: 'La Salle',
      GTe: 'UNAM',
    },
  },
  {
    state: 'Ciudad de México',
    denomination: 'CDMX - Poniente',
    productMapping: {
      GV: 'Tec Santa Fe',
      GTa: 'Tec Santa Fe',
      GTe: 'UNAM',
    },
  },
  {
    state: 'Ciudad de México',
    denomination: 'CDMX - Sur',
    productMapping: {
      GV: 'UNAM',
      GTa: 'UNAM',
      GTe: 'UNAM',
    },
  },
];
