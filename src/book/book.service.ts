import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/add-books.args';
import { UpdateBookArgs } from './args/update-book.args';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>
    ){}

    async addBook(addBookArgs:AddBookArgs) {
        await this.bookRepository.save(addBookArgs)
        return "Book added Successfully";
    }

    async updateBook(updateBookArgs:UpdateBookArgs) {
        let book =  await this.bookRepository.findOne({where: {id:updateBookArgs.id}})
        book['title'] = updateBookArgs.title
        book['price'] = updateBookArgs.price

        await this.bookRepository.save(book)
        return 'Book updated successfully!'
    }

    async deleteBook(id: string) {
        await this.bookRepository.delete({id})
        return 'Book has been deleted!'
    }

    async findBookById(id: string) {
        let book = await this.bookRepository.findOne({where: {id}})
        return book
    }

    async gelAllBooks() {
        let books = await this.bookRepository.find({})
        console.log(books)
        return {
            book: books
        }
    }
}
