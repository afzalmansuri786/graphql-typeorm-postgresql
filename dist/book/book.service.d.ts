import { Repository } from 'typeorm';
import { AddBookArgs } from './args/add-books.args';
import { UpdateBookArgs } from './args/update-book.args';
import { BookEntity } from './entity/book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<BookEntity>);
    addBook(addBookArgs: AddBookArgs): Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): Promise<string>;
    deleteBook(id: string): Promise<string>;
    findBookById(id: string): Promise<BookEntity>;
    gelAllBooks(): Promise<{
        book: BookEntity[];
    }>;
}
