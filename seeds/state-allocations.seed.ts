import { Product } from 'src/common/entities/product';
import { State } from 'src/common/entities/state';

type StateAllocationSeed = {
  state?: State['name'];
  productMapping: Record<Product['shortName'], string>;
};

export const StateAllocationSeeds: StateAllocationSeed[] = [
  {
    state: 'Chihuahua',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    state: 'Jalisco',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    state: 'Coahuila',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    state: 'Aguascalientes',
    productMapping: { GV: 'Aguascalientes', GTe: 'León', GTa: 'León' },
  },
  {
    state: 'Guanajuato',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    state: 'San Luis Potosí',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    state: 'Michoacán',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    state: 'Nayarit',
    productMapping: { GV: 'Nayarit', GTe: 'Querétaro', GTa: 'Nayarit' },
  },
  {
    state: 'Oaxaca',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    state: 'Puebla',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    state: 'Tlaxcala',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    state: 'Colima',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    state: 'Querétaro',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    state: 'Sinaloa',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    state: 'Sinaloa',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    state: 'Sonora',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sonora' },
  },
  {
    state: 'Chiapas',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    state: 'Tabasco',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    state: 'Tamaulipas',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    state: 'Nuevo León',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    state: 'Hidalgo',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    state: 'Baja California',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    state: 'Baja California Sur',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    state: 'Guerrero',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'UNAM' },
  },
  {
    state: 'Morelos',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    state: 'Campeche',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    state: 'Veracruz',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    state: 'Yucatán',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    state: 'Quintana Roo',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    state: 'Durango',
    productMapping: { GV: 'Zacatecas', GTe: 'UAEMEX', GTa: 'Zacatecas' },
  },
  {
    state: 'Zacatecas',
    productMapping: { GV: 'Zacatecas', GTe: 'Querétaro', GTa: 'Zacatecas' },
  },
];
