import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'book'})
export class BookEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @Column()
    price: number;
}