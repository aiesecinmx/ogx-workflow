import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn('tinyint', { unsigned: true }) expaId: number;

  @Column() name: string;
  @Column() shortName: string;
}
