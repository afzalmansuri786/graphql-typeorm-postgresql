import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBookArgs{
    @Field()
    title:string

    @Field()
    price: number

    @Field()
    id:string
}