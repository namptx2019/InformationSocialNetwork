import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { questionServiceUrl } from 'src/app/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private databaseUrl = questionServiceUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) {
  }


  getAllQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.databaseUrl + 'api/questions');
  }

  getQuestionDetail(id: number): Observable<Question>{
    const url = this.databaseUrl + 'api/Users' + `/${id}`;
    return this.http.get<Question>(url);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    const url = this.databaseUrl + 'api/Users' + `/${id}`;
    return this.http.put<Question>(url, question, this.httpOptions);
  }

  createQuestion(question: Question): Observable<Question> {
    const url = this.databaseUrl + 'api/Users';
    return this.http.post<Question>(url, question, this.httpOptions);
  }

  deleteQuestion(id: number): Observable<Question> {
    const url = this.databaseUrl + 'api/questions' + `/${id}`;
    return this.http.delete<Question>(url, this.httpOptions);
  }
}
