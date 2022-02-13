// import { User } from '../models/User';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  test() {
    return 'test success';
  }
}
