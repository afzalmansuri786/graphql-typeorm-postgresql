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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("./entity/book.entity");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async addBook(addBookArgs) {
        await this.bookRepository.save(addBookArgs);
        return "Book added Successfully";
    }
    async updateBook(updateBookArgs) {
        let book = await this.bookRepository.findOne({ where: { id: updateBookArgs.id } });
        book['title'] = updateBookArgs.title;
        book['price'] = updateBookArgs.price;
        await this.bookRepository.save(book);
        return 'Book updated successfully!';
    }
    async deleteBook(id) {
        await this.bookRepository.delete({ id });
        return 'Book has been deleted!';
    }
    async findBookById(id) {
        let book = await this.bookRepository.findOne({ where: { id } });
        return book;
    }
    async gelAllBooks() {
        let books = await this.bookRepository.find({});
        console.log(books);
        return {
            book: books
        };
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map