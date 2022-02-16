// import { User } from '../models/User';
import { Context } from 'src/context';
import { User } from 'src/models/User';
import argon2 from 'argon2';
import { registerValidation } from '../utils/validation';
import { UserSchema } from 'src/utils/inputs';
import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';

@ObjectType()
class InputError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [InputError], { nullable: true })
  errors?: InputError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UserSchema,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    const errors = registerValidation(options);
    if (errors) {
      return { errors };
    }
    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          email: options.email,
          password: hashedPassword,
        })
        .returning('*')
        .execute();
      console.log('result: ', result);
      user = result.raw[0];
    } catch (err) {
      if (err.code === '23505' || err.detail.includes('exists')) {
        return {
          errors: [
            {
              field: 'username',
              message: 'that username already exists',
            },
            {
              field: 'email',
              message: 'that email is already in use',
            },
          ],
        };
      }
    }
    return { user };
  }
}
