import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Interface/post';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
// const httpOptions = {
//   Credential:true,
//   headers: new HttpHeaders({

//   })
// }
export class PostService {

  constructor(private http:HttpClient, private user:UserService) { }


  url:string = 'http://localhost:5000/api/posts/'
  createPost(body:string){
    return this.http.post(this.url, {post:body})
  }

  getUserPosts(){
    // console.log('hi there')
    return this.http.get(`${this.url}me`)
    //make it so this returns for all users, i send a username, and it sends all their posts back. Also their reposts and likes.
  }

  getTimelinePosts(){
    return this.http.get(`${this.url}`);
  }

  likeUnlikePost(id:string){
    return this.http.put(`${this.url}${id}/like`, id)
  }


  getLikedUnlikedPost(id:string){
    return this.http.get(`${this.url}${id}`)
  }

  deletePost(){

  }

  addComment(id:string, comment:string){
      let headers = new HttpHeaders({
        contentType: 'application/json',
      });
      let newComment = {
        comment:comment
      }
    return this.http.post(`${this.url}${id}`, newComment, {headers: headers})
  }
  
 
}
