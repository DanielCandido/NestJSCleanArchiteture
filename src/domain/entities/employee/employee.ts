import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  login: string;

  constructor() {}
}
