import { Answer } from './../models/answer.model';
import { service } from './../../config';
import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private databaseUrl = service;

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
    const url = this.databaseUrl + 'api/Questions' + `/${id}`;
    return this.http.get<Question>(url);
  }

  getUserQuestions(id: number): Observable<Question[]>{
    const url = this.databaseUrl + 'api/Questions/user' + `/${id}`;
    return this.http.get<Question[]>(url);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    const url = this.databaseUrl + 'api/Questions' + `/${id}`;
    return this.http.put<Question>(url, question, this.httpOptions);
  }

  ratingQuestion(id: number, rating: number): Observable<Question> {
    const url = this.databaseUrl + 'api/Questions/rating' + `/${id}`;
    return this.http.post<Question>(url, rating, this.httpOptions);
  }

  ratingAnswer(id: number, rating: number): Observable<Question> {
    const url = this.databaseUrl + 'api/Questions/answer' + `/${id}`;
    return this.http.post<Question>(url, rating, this.httpOptions);
  }

  createQuestion(question: Question): Observable<Question> {
    const url = this.databaseUrl + 'api/Questions';
    return this.http.post<Question>(url, question, this.httpOptions);
  }

  deleteQuestion(id: number): Observable<Question> {
    const url = this.databaseUrl + 'api/questions' + `/${id}`;
    return this.http.delete<Question>(url, this.httpOptions);
  }

  getAllCategories(): Observable<Category[]> {
    const url = this.databaseUrl + 'api/questions/categories';
    return this.http.get<Category[]>(url);
  }

  createAnswer(answer: Answer): Observable<Answer> {
    const url = this.databaseUrl + 'api/questions/answer';
    return this.http.post<Answer>(url, answer, this.httpOptions);
  }
}
