import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { SocketService } from 'src/app/Services/socket.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css'],
})
export class ProfileContainerComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private user: UserService,
    private post: PostService,
    private socket: SocketService,
    private route:Router
  ) {}

  activeNav: string = 'posts';

  posts: boolean = true;
  reposts: boolean = false;
  likes: boolean = false;
  media: boolean = false;

  searchedUser: any;
  loggedInUser: any;
  @Input() currUser: any;

  ngOnInit(): void {
    // console.log(this.currUser)
    this.user.user$.subscribe({
      next: (data: any) => {
        this.loggedInUser = data._id
      },
    });
  }

  swapNav(selected: string) {
    if (selected == 'posts') {
      this.reposts = false;
      this.media = false;
      this.likes = false;
      this.posts = true;
      this.activeNav = 'posts';
    } else if (selected == 'reposts') {
      this.media = false;
      this.likes = false;
      this.posts = false;
      this.reposts = true;
      this.activeNav = 'reposts';
    } else if (selected == 'media') {
      this.media = true;
      this.likes = false;
      this.posts = false;
      this.reposts = false;
      this.activeNav = 'media';
    } else {
      this.media = false;
      this.likes = true;
      this.posts = false;
      this.reposts = false;

      this.activeNav = 'likes';
    }
  }

  sendMessage(text:any) {

    // this.route.navigate([`/home/messages/message/${this.currUser.id}`])
    this.route.navigate(
      ['home', 'messages', 'message', `${this.currUser.id}`],
      {
        state: {
            id: this.currUser.id,
        },
      }
    );
    // 

  }
}
