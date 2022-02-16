import { Field, ID, ObjectType } from 'type-graphql';
import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Tutor extends User {
    // Tutor ID
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;
    
    // Tutor Pay Rate
    @Field()
    @Column()
    rate: DoubleRange;

    // Tutor Resume
    @Field()
    @Column()
    resume: File;

    // Tutor Subjects
    @Field()
    @Column()
    subjects: String[];

    // Tutor Availability
    @Field(() => String)
    @CreateDateColumn()
    availability = new Date();

    // Tutor Sessions - Putting sessions on pause for now

}