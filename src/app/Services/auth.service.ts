import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../Interface/register-user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:5000/api';
  register(body: RegisterUser): Observable<any> {
    let headers = new HttpHeaders({
      contentType: 'application/json',
    });
    return this.http.post(`http://localhost:5000/api/auth/register`, body, {
      headers: headers,
    });
  }

  login(body: object) {
    let headers = new HttpHeaders({
      contentType: 'application/json',
    });
    return this.http.post('http://localhost:5000/api/auth/login', body, {
      headers: headers,
    });
  }

  
  
}
