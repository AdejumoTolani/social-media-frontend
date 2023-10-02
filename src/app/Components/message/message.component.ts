import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from 'src/app/Services/socket.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(private socket: SocketService, private user: UserService, private route:ActivatedRoute, private router:Router, private cdRef:ChangeDetectorRef) {}
  messageText: string = '';
  userDetails: any;
  receivedMessages: Array<{ user: string; message: string }> = [];
  recipient:any;
 currUser:any;
 messages:any = []
  ngOnInit(): void {
    this.socket.getMessage().subscribe({
      next:(data:any)=> {
        this.messages.push(data)
        this.cdRef.detectChanges()
      }
    })

      //  let userId: any;
       this.user.user$.subscribe({
         next: (data: any) => {
           this.currUser = data;
         },
       });
  }


  send(text:any){
    let userId:any
    this.user.user$.subscribe({
      next: (data: any) => {
        userId = data._id
      },
    });
    
    let details = history.state.convo.members;
    let recipient = details.find((detail:any) => detail !== userId)
    let messageInfo: any = {
      sender: userId,
      recipient: recipient,
      message: text,
    };
    this.socket.sendMessage(messageInfo);
  }

  click(){
   this.socket
     .getMessage()
     .subscribe((data: { user: string; message: string }) => {
      //  console.log(data);
       // Push received messages to the array
       this.receivedMessages.push(data);
     });
  }
}
