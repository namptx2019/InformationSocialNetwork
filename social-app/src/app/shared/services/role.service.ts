import { Role } from './../models/role.model';
import { service } from './../../config';
import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private databaseUrl = service;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) {
  }


  getAllRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(this.databaseUrl + 'api/role');
  }

  createOrEditRole(role: Role): Observable<Role> {
    const url = this.databaseUrl + 'api/role';
    return this.http.post<Role>(url, role, this.httpOptions);
  }
}
