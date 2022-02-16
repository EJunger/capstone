import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  fName!: string;

  @Field()
  @Column({ unique: true })
  lName!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column({ type: 'varchar', length: 150 })
  address!: string;

  @Field()
  @Column()
  phone!: number;

  @Column()
  password!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = new Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = new Date();
}
