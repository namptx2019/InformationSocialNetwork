import { FormGroup, FormControl } from '@angular/forms';
import { Answer } from './../shared/models/answer.model';
import { Question } from './../shared/models/question.model';
import { QuestionService } from './../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user.model';
import * as moment from 'moment';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  public question: Question;
  public answers: Answer[];
  public user: User;
  public form: FormGroup;
  public controls = {
    vote: new FormControl(),
    answer: new FormControl()
  };
  private id: string;
  private answerId: number;

  faStar = faStar;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
  ) {
    this.form = new FormGroup(this.controls);
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') as any);
    }
  }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    this.questionService.getQuestionDetail(+this.id).subscribe(res => {
      this.question = res;
      this.answers = res.answers;
    });
  }

  getAnswerId(answerId: number): void {
    this.answerId = answerId;
  }

  submitRating(): void {
      this.questionService.ratingQuestion(+this.id, +this.controls.vote.value).subscribe(res => {
        document.getElementById('closeRating')?.click();
        window.alert('Rating success!');
        this.loadQuestion();
      });
  }

  submitRatingAnswer(): void {
    this.questionService.ratingAnswer(this.answerId, +this.controls.vote.value).subscribe(res => {
      document.getElementById('closeAnswerRating')?.click();
      window.alert('Rating success!');
      this.loadQuestion();
    });
  }

  submitAnswer(): void {
    const answer = new Answer();
    answer.answerContent = this.controls.answer.value;
    answer.questionId = +this.id;
    answer.userId = this.user.userId;
    answer.isActive = true;
    answer.createDate = moment().toDate();
    answer.updateDate = moment().toDate();

    this.questionService.createAnswer(answer).subscribe(res => {
      document.getElementById('closeAnswer')?.click();
      window.alert('Answer success!');
      this.loadQuestion();
    });
  }
}
