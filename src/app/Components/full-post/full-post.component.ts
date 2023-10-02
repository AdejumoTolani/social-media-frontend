import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css'],
})
export class FullPostComponent implements OnInit, OnChanges {
  fullPost: any;
  fullerPost: any;
  liked: boolean = true;
  newComment: String = '';
  constructor(private route: ActivatedRoute, 
              private post: PostService, 
              private user:UserService, 
              private router: Router) {}

  ngOnInit(): void {
    this.id = history.state.data.content.id;
    this.fullPost = history.state.data.content[0];
    this.liked = history.state.data.content[1].liked;
    this.fullerPost = history.state.data.data;
    
    
    console.log(this.fullPost)
  }
  id: string = '';
  ngOnChanges() {
    // this.fullPost = history.state.data.content[0];
  }
  data: any;
  addComment(comment: string) {
    this.post.addComment(this.fullPost._id, comment).subscribe({
      next: (data: any) => {
        this.fullerPost.comments = data.post.comments;
        // console.log(data.post.comments)
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getUser() {
    console.log('Details:');
    this.user.getClickedUser(this.fullPost.userId.username).subscribe({
      next: (data: any) => {
        // console.log(data);
        this.router.navigate(['/user-profile', this.fullPost.userId.username]);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
