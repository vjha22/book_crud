import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book.modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books:Book[] = [];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.books = this.svc.books;
  }
  rmv(i){
    this.books.splice(i,1);
  }
}
