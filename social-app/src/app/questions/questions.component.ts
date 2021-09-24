import { DataService } from './../shared/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from './../shared/models/question.model';
import { QuestionService } from './../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import * as moment from 'moment';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public user: User;
  public questions: Question[];
  public filterOption = [
    {
      value: 1,
      title: 'Latest'
    },
    {
      value: 2,
      title: 'Oldest'
    }
  ];
  public isAsking = false;

  public questionForm: FormGroup;
  public controls = {
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  };

  public categories: Category[];

  constructor(public dataService: DataService, private questionService: QuestionService) {
    this.questionForm = new FormGroup(this.controls);
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') as any);
    }
  }

  submitQuestion(): void {
    const question = {
      categoryId: +this.controls.category.value,
      title: this.controls.title.value,
      content: this.controls.content.value,
      rating: 0,
      creatorId: this.user.userId,
      tag: 'math;text;constructor',
      createdAt:  moment().toDate()
    } as Question;

    this.questionService.createQuestion(question).subscribe(result => {
      this.loadQuestions();
      this.questionForm.reset();
      this.openCloseQuestionForm();
      window.alert('Your question is uploaded');
    });
  }


  ngOnInit(): void {
    this.loadQuestions();
    this.categories = this.dataService.categories;
  }

  loadQuestions(): void {
    this.questionService.getAllQuestions().subscribe(result => {
      this.questions = result.sort((a, b) => {
        return moment(b.createdAt).toDate().getTime() - moment(a.createdAt).toDate().getTime();
      });
    });
  }
  openCloseQuestionForm(): void {
    this.isAsking = !this.isAsking;
  }
}
