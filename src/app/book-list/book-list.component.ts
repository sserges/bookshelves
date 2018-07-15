import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Book } from '../models/Book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;
  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.booksSubscription = this.booksService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );

    this.booksService.getBooks();
    // this.booksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book, event) {
    if (confirm('Voulez-vous vraiment supprimer ce livre ?')) {
      this.booksService.removeBook(book);
    }
    event.stopPropagation();
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

}
