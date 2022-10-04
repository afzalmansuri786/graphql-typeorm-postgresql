"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const add_books_args_1 = require("./args/add-books.args");
const update_book_args_1 = require("./args/update-book.args");
const book_service_1 = require("./book.service");
const type_gql_1 = require("./gql/type.gql");
const book_schema_1 = require("./schema/book.schema");
let BookResolver = class BookResolver {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getAllBooks() {
        return this.bookService.gelAllBooks();
    }
    getBookById(id) {
        return this.bookService.findBookById(id);
    }
    deleteBookById(id) {
        return this.bookService.deleteBook(id);
    }
    addBook(addBookArgs) {
        return this.bookService.addBook(addBookArgs);
    }
    updateBookById(updateBookArgs) {
        return this.bookService.updateBook(updateBookArgs);
    }
};
__decorate([
    (0, graphql_1.Query)(returns => type_gql_1.GetBooks, { name: 'books' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getAllBooks", null);
__decorate([
    (0, graphql_1.Query)(returns => type_gql_1.GetBooksDetails, { name: 'findBookById', nullable: true }),
    __param(0, (0, graphql_1.Args)({ name: 'bookId' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBookById", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String, { name: 'deleteBook' }),
    __param(0, (0, graphql_1.Args)({ name: 'bookId' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBookById", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String, { name: 'addBook' }),
    __param(0, (0, graphql_1.Args)('addBookArgs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_books_args_1.AddBookArgs]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "addBook", null);
__decorate([
    (0, graphql_1.Mutation)(returns => String, { name: 'updateBook' }),
    __param(0, (0, graphql_1.Args)('updateBookArgs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_args_1.UpdateBookArgs]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "updateBookById", null);
BookResolver = __decorate([
    (0, graphql_1.Resolver)(of => book_schema_1.Book),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=book.resolver.js.map