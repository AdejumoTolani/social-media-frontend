import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private user: UserService,
    private post: PostService
  ) {}

  currUser:any= {
    
  }
  ngOnInit(): void {
    this.user.getUser().subscribe({
      next: (data: any) => {
        this.currUser.username = data.user.username;
        this.currUser.displayName = data.user.displayName;
        this.currUser.aboutProfile = data.user.aboutProfile;
        this.currUser.follows = data.user.follows.length;
        this.currUser.followerNum = data.user.followedBy.length;
      },
      error: (err) => {
        console.log(err);
      },
    });


    this.post.getUserPosts().subscribe({
      next: (data: any) => {
        this.currUser.userPosts = data.sortedPosts
      },
      error: (err) => {
        console.log(err);
      }}
    
    );

  }

}
