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
  password: string;
  @Field()
  email: string;
}

@InputType()
export class EmailPasswordLogin {
  @Field()
  email: string;
  @Field()
  password: string;
}
