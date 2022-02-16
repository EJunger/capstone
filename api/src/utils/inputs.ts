import { Field, InputType } from 'type-graphql';

@InputType()
export class UserSchema {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
}
