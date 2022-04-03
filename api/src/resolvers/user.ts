import { Context } from '../context';
import { User } from '../models/User';
import argon2 from 'argon2';
import { registerValidation } from '../utils/validation';
import { UserSchema } from '../utils/inputs';
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { COOKIE_NAME } from 'src/env.const';

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
  //Register User
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UserSchema,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    const errors = registerValidation(options);
    if (errors) {
      return { errors };
    }
    const passwordHash = await argon2.hash(options.password);
    let user;
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          email: options.email,
          fName: options.fName,
          lName: options.lName,
          password: passwordHash,
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
              message: 'That username already exists',
            },
            {
              field: 'email',
              message: 'That email is already in use',
            },
          ],
        };
      }
    }
    //! FOR SESSION IMPL **TESTING**
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return {
        errors: [
          {
            field: 'email',
            message: "that email  doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password',
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }

  @Query(() => User, { nullable: true })
  CurrentUser(@Ctx() { req }: Context) {
    if (!req.session.userId) {
      return null;
    }
    return User.findOne(req.session.userId);
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: Context) {
    return new Promise((resolve) =>
      req.session.destroy((err: any) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
