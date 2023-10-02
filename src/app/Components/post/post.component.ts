import { trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { SocketService } from 'src/app/Services/socket.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService, 
              private user: UserService, 
              private route:Router, 
              private socket: SocketService) {}
  @Input() post:any;


  liked:boolean = false;
  ngOnInit(): void {
    // console.log(this.post)
  }



fullPost:any;


  toggleLike() {
    this.liked = !this.liked; 
  
  }

  repost(repost: MouseEvent) {
    
  }

  visib(visib: MouseEvent) {
   
  }
 

  getFullPost() {
     this.route.navigate(['/full-post'], {
       state: {
         data: {
           content: this.post,
           data:this.fullPost
          
         },
       },
     });
  }
}
