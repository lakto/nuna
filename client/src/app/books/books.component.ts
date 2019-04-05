import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author'];
  data: Book[] = [];
  resp: any = {};
  loading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query({
      query: gql `{ books { _id, title, author } }`
    }).subscribe(res => {
      this.resp = res;
      this.data = this.resp.data.books;
      console.log(this.data);
      this.loading = false;
    });
  }
}
