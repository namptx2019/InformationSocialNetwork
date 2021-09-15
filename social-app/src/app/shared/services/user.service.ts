import { Injectable } from '@angular/core';
import { projectUrl } from 'src/app/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private databaseUrl = projectUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) {
  }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.databaseUrl + 'api/Users');
  }

  logIn(email: string, password: string): Observable<User>{
    return this.http.get<User>(this.databaseUrl + 'api/Users/login' + `?email=${email}&password=${password}`);
  }

  getTopRank(): Observable<User[]>{
    return this.http.get<User[]>(this.databaseUrl + 'api/Users/topRank');
  }

  getMe(id: number): Observable<User>{
    const url = this.databaseUrl + 'api/Users' + `/${id}`;
    return this.http.get<User>(url);
  }

  updatePwUser(id: number, user: User): Observable<User> {
    const url = this.databaseUrl + 'api/Users' + `/${id}`;
    return this.http.put<User>(url, user, this.httpOptions);
  }
}
