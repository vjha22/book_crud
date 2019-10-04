import { Component, OnInit } from '@angular/core';
import { Book } from '../book.modal';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book: Book;
  bookId: number;
  //text:string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element => {
      if(element.id==this.bookId){
        this.book=element;
      }
    });
  }

}