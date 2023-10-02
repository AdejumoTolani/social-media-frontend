import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  url: string = 'http://localhost:5000/api/users/';



  getUser() {
  //currUser
    return this.http.get(`${this.url}`);
  }

  setUser(user:any){
    this.userSubject.next(user);
  }

  details:any;
  getUserDetails(){
 
    this.getUser().subscribe({
      next:(data)=>{
        this.details = data
        console.log(data)
        console.log(this.details)
        return data;
      }, error:(err:any)=>{
          return ""
      }
    })
// console.log(this.details)
    return this.details
  }

  getClickedUser(id:string){
    return this.http.get(`${this.url}${id}`)
  }

  updateUser() {}

  deleteUser() {}

  searchUser(user:string) {
    return this.http.get(`${this.url}/${user}`)
  }

  followUnfollowUser() {}
}
