import { Field, Int } from "@nestjs/graphql";

export class Book {
    @Field((type) => Int)
    id:string;

    @Field()
    title:string

    @Field((type) => Int)
    price:number
}