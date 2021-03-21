import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{

  @Input() post: Post = {
    title: '',
    author: '',
    content: ''
  }

  constructor() {
     console.log('constructor')
}



  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    console.log("Post has been destroyed")
  }

}
