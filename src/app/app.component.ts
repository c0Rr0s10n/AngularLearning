
import { Component } from '@angular/core';

export interface Post {
 title: string
 author: string
 content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  // elems = [
  //   {
  //     name: 'Alex',
  //     lname: 'Lee'
  //   },
  //   {
  //     name: 'Ruslan',
  //     lname: 'Bakhyshev'
  //   },
  //   {
  //     name: 'Dastan',
  //     lname: 'Otarkhan'
  //   },
  //   {
  //     name: 'Nurbol',
  //     lname: 'Kalzhigitov'
  //   }
  // ];

  // now: Date = new Date();

  posts: Post[] = [
    {
      title: "Starting learning angular",
      author: "Alex Lee",
      content: "I am starting learning angular right now and nobody can stop me."
    },
    {
      title: "Starting learning angular",
      author: "Alex Lee",
      content: "I am starting learning angular right now and nobody can stop me."
    },
    {
      title: "Starting learning angular",
      author: "Alex Lee",
      content: "I am starting learning angular right now and nobody can stop me."
    },
    {
      title: "Starting learning angular",
      author: "Alex Lee",
      content: "I am starting learning angular right now and nobody can stop me."
    }
  ]
}
