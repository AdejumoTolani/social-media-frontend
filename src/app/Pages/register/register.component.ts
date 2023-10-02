import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/Interface/register-user';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { SocketService } from 'src/app/Services/socket.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService,private post:PostService, private user:UserService,private route: Router, private socket: SocketService) {}
  // login: boolean = false;
  isRegistering: boolean = false;
  @Output()username = new EventEmitter<string>();
  toggleRegisterMode() {
    this.isRegistering = !this.isRegistering;
  }

  errors: any = {};
  onSubmit(authForm: NgForm) {
    if (this.isRegistering) {
      let user: RegisterUser = {
        email: authForm.value.email,
        displayName: authForm.value.displayName,
        password: authForm.value.password,
        username: authForm.value.username,
      };
      this.auth.register(user).subscribe({
        next: (data) => {
          console.log(user.username)
           this.route.navigate([`home/profile`], {
             state: {
               data: {
                 data,
               },
             },
           });
          this.username.emit(user.username);
          this.socket.init(user.username)
        },
        error: (err) => {
          if (err.status == 400) {
            this.errors = err.error.error;
          } else {
            // console.log(err)
            this.errors.server = 'An internal server error occured.';
          }
        },
      });
    } else {
      //login functionality
      let user: any = {
        username: authForm.value.username,
        password: authForm.value.password,
      };
      this.auth.login(user).subscribe({
        next: (data:any) => {
          // this.post.getUserID(data)
          console.log(user.username)
          this.route.navigate([`home//profile`], {
            state:{
              data:{
                data
              }
            }
          });
          this.username.emit(user.username);
          // this.socket.init(user.username);
          // console.log(`home/${user.username}/profile`)

        },
        error: (err) => {
          if (err.status == 400) {
            this.errors = err.error.error;
          } else {
            this.errors.server = 'An internal server error occured.'
          }
        },
      });
    }
  }
}
