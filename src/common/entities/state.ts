import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Campus } from './campus';

@Entity()
export class State {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @OneToMany(() => Campus, ({ state }) => state)
  campuses: Campus[];
}
