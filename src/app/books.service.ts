import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from './books/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = 'http://localhost:8080/books'
  constructor(private client: HttpClient) {
  }

  getBooks () {
    return this.client.get <Book[]>(this.url)
  }

  addBooks(book: Book): Observable<any> {
    return this.client.post<Book>(this.url, book)
  }
}
