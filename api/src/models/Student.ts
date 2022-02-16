import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Student extends User {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  school!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  //Booked session()
}
