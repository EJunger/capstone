import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Parent extends User {
    // Child ID
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;
    
    // Child Details
    @Field()
    @Column()
    child: string;

    // Student Schedule - Putting on pause for now (incomplete)
}