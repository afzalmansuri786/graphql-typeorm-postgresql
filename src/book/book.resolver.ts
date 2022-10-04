import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddBookArgs } from './args/add-books.args';
import { UpdateBookArgs } from './args/update-book.args';
import { BookService } from './book.service';
import { GetBooks, GetBooksDetails } from './gql/type.gql';
import { Book } from './schema/book.schema';



@Resolver(of => Book)
export class BookResolver {

  constructor(private readonly bookService: BookService){}

  //Queries and Mutations

  @Query(returns => GetBooks , { name : 'books'})
  getAllBooks(){
    return this.bookService.gelAllBooks();
  }

  @Query(returns => GetBooksDetails, { name : 'findBookById', nullable:true})
  getBookById(@Args({ name: 'bookId'}) id:string){
    return this.bookService.findBookById(id);
  }

  @Mutation(returns => String, { name: 'deleteBook'})
  deleteBookById(@Args({name: 'bookId'}) id:string):Promise<string> {
    return this.bookService.deleteBook(id)
  }

  @Mutation(returns => String, {name: 'addBook'})
  addBook(@Args('addBookArgs') addBookArgs:AddBookArgs):Promise<string>{
    return this.bookService.addBook(addBookArgs)
  }

  @Mutation(returns => String, { name: 'updateBook'})
  updateBookById(@Args('updateBookArgs') updateBookArgs:UpdateBookArgs):Promise<string>{
    return this.bookService.updateBook(updateBookArgs)
  }
}
