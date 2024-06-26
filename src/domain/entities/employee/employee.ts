import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType()
export class Employee {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  login: string;

  @Field()
  role: Role;

  @Field()
  status: boolean;

  @Field()
  password: string;

  constructor() {}
}
