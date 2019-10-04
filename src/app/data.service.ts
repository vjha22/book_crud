import { Injectable } from '@angular/core';
import{Book}from'./book.modal';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  books:Book[] = [];
 
  constructor() { }
  create(b:Book){
    this.books.push(b);
    b.id = this.books.length -1;
  }
}
