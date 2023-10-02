import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/Services/chat.service';
import { SocketService } from 'src/app/Services/socket.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  constructor
  (  private socket:SocketService,
     private user:UserService, 
     private chat:ChatService, 
     private route:Router){

  }

  currUser:any;
  conversations:[] = []
  ngOnInit(): void {

    this.chat.getConversations().subscribe({
      next:(data:any)=>{
        this.conversations = data
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }


  getFullConvo(convo:any){
    const convoId = convo._id
    const routePath = ['conversation', convoId];
      const navigationExtras = {
        state: { convo: convo },
      };
    this.route.navigate(routePath, navigationExtras)
  }
}
