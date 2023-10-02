import { Injectable } from '@angular/core';
import { io } from 'socket.io-client'
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private notification:NotificationService) { }
  socket = io('http://localhost:5000');

  init(user:any){
    this.socket.connect();
    this.socket.emit('login', user)
  }


  sendMessage(data:any){
    this.socket.emit('message', data)
  }

  getMessage():Observable<any>{
    return new Observable<{user:String, message:string}>(observer=>{
      this.socket.on('getMessage', (data:any) =>{
        observer.next(data)
      })
    })
  }


}
