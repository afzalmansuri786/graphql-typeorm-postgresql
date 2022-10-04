import { ObjectType,Field } from '@nestjs/graphql';

@ObjectType()
export class GetBooksDetails {
    @Field()
    readonly id: string;

    @Field()
    readonly title: string;

    @Field()
    readonly price: number;
}
@ObjectType()
export class GetBooks {
    @Field((type)=> [GetBooksDetails])
    readonly book : GetBooksDetails[];
}
