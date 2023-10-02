import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Interface/post';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit{
  toastMessage: string | null = null;
  constructor(
    private post: PostService,
    private auth: AuthService,
    private user: UserService,
    private route: Router
  ) {}
  ngOnInit(): void {
    // console.log('here')
    this.post
    .getTimelinePosts()
    .subscribe({
      next:(data:any)=>{
        // console.log(data.sortedPosts)
        this.posts = data.sortedPosts
      }, 
      error:(err:any)=>{
        console.log(err)
      }
    })
      
      
  
  }
likes:any = []


  showMessage() {
    // console.log('hi')
    this.toastMessage = 'This is an error message.';
  }
  username: string = '';
  displayName: string = '';
  posts: any = []
  fullerPost:any;



  makePost(body: string) {
    this.post.createPost(body).subscribe({
      next: (data:any) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }




  searchedUser:any | null = null
  search(value: string) {
    this.user.searchUser(value).subscribe({
      next: (data: any) => {
        this.searchedUser = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
