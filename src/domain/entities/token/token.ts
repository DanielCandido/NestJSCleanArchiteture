import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType()
export class Token {
  @Field()
  accessToken: string;

  constructor() {}
}
