import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  // constructor()
  ngOnInit(){
    // console.log(this.user)
  }
  @Input() user:any
  toggleLike(){

  }
  repost(){

  }
}
