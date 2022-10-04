import { AddBookArgs } from './args/add-books.args';
import { UpdateBookArgs } from './args/update-book.args';
import { BookService } from './book.service';
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<{
        book: import("./entity/book.entity").BookEntity[];
    }>;
    getBookById(id: string): Promise<import("./entity/book.entity").BookEntity>;
    deleteBookById(id: string): Promise<string>;
    addBook(addBookArgs: AddBookArgs): Promise<string>;
    updateBookById(updateBookArgs: UpdateBookArgs): Promise<string>;
}
