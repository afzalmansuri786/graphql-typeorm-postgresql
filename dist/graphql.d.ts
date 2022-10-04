export interface AddBookArgs {
    title: string;
    price: number;
}
export interface UpdateBookArgs {
    title: string;
    price: number;
    id: string;
}
export interface GetBooksDetails {
    id: string;
    title: string;
    price: number;
}
export interface GetBooks {
    book: GetBooksDetails[];
}
export interface IQuery {
    index(): string | Promise<string>;
    books(): GetBooks | Promise<GetBooks>;
    findBookById(bookId: string): Nullable<GetBooksDetails> | Promise<Nullable<GetBooksDetails>>;
}
export interface IMutation {
    deleteBook(bookId: string): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
}
declare type Nullable<T> = T | null;
export {};
