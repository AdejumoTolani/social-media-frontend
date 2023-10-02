import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  constructor(private user:UserService, private route:ActivatedRoute){}



  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const user = params['username'];
      // console.log(user)
      this.user.getClickedUser(user).subscribe({
        next: (data: any) => {
          // this.searchedUser = data.details._id
          this.currUser.username = data.details.username;
          this.currUser.displayName = data.details.displayName;
          this.currUser.aboutProfile = data.details.aboutProfile;
          this.currUser.follows = data.details.follows.length;
          this.currUser.followerNum = data.details.followedBy.length;
          this.currUser.userPosts = data.arr;
          this.currUser.id = data.details._id
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    });

    this.user.user$.subscribe({
     next: (data: any) => {
        //  console.log(data)
        //  this.loggedInUser = data
     },
     });
  }
  currUser:any = {

  }
  
}
