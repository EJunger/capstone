import { Field, InputType } from 'type-graphql';

@InputType()
export class UserSchema {
  @Field()
  username: string;
  @Field()
  fName: string;
  @Field()
  lName: string;
  @Field()
  address: string;
  @Field()
  phone: string;
  @Field()
  password: string;
  @Field()
  email: string;
}
