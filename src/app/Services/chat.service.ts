import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url: string = 'http://localhost:5000/api/conversations/';
  constructor(private http:HttpClient) {}
  getConversations() {
    return this.http.get(this.url)
  }

  startConversation(recipient:any){
    return this.http.post(this.url, recipient)
  }
}
