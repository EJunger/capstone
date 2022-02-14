import { Student } from 'src/models/Student';
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';

@Resolver(Student)
export class StudentResolver {

    @Query (() => String)
    async sampple(){
        return "hello"
    }

    @FieldResolver()
    async studentDetails(@Root() parent: Student){
        return `${parent.school} ${parent.email}`
    }


    @Mutation (() => String)
    async students(
        @Arg('school') school: string,
        @Arg('email') email: string
    )
    : Promise<Student>
    {
        const student = await Student.create({
            school,
            email

        }).save()
        
        return student;
    }


}
