import { Component, OnInit } from '@angular/core';
import { SocketService } from './Services/socket.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private socket:SocketService, 
              private user:UserService){}
  ngOnInit(){
    this.user.getUser().subscribe({
      next:(data:any)=>{
        this.user.setUser(data.user)
        this.socket.init(data.user._id);
      }
    })
  }
  title = 'Social-App-Frontend';
  message:String ='Message from app '
}
