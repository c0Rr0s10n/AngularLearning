import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput') inputRef: ElementRef | undefined

  title: string = ''
  author: string = ''
  content: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.content.trim() && this.title.trim() && this.author.trim()) {
      const post: Post = {
        title: this.title,
        content: this.content,
        author: this.author
      }

      this.onAdd.emit(post)

      this.title = ''
      this.content = ''
      this.author = ''
    }
  }

  focusTitle() {
    this.inputRef?.nativeElement.focus()
  }
}
