import { Component } from '@angular/core';

export interface Post {
  title: string
  author: string
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  posts: Post[] = [
    {
      title: 'I am learning angular right now1',
      author: 'Alex Lee1',
      content: 'Yes i am learning angular1'
    },
    {
      title: 'I am learning angular right now2',
      author: 'Alex Lee2',
      content: 'Yes i am learning angular2'
    },
    {
      title: 'I am learning angular right now3',
      author: 'Alex Lee3',
      content: 'Yes i am learning angular3'
    },
    {
      title: 'I am learning angular right now4',
      author: 'Alex Lee4',
      content: 'Yes i am learning angular4'
    },
  ]

  updatePostList(post: Post){
    this.posts.unshift(post)
  }
}
