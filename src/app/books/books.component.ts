import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book> = [];
  booksService;
  newBookName: string = "";

  constructor(booksService: BooksService) {
    this.booksService = booksService
   }

  ngOnInit(): void {
    this.fetchBooks()
  }

  // onEdit(oldName: string, newName: string) {
  onNameEdit(oldName: string) {
    console.log('OLD and NEW: ', oldName)
  }

  fetchBooks() {
    this.booksService.getBooks()
      .subscribe((books: Book[]) => {
        console.log('Books: ', books)
        this.books = books
      });
  }

  addNewBook(name: string) {
    console.log('ADD RECEIVED: ', name, this.newBookName)
    let newBook: Book = { name, description: "" }
    this.booksService
      .addBooks(newBook)
      .subscribe(b => this.fetchBooks())
  }
}
