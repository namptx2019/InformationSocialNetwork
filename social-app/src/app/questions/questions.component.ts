import { Question } from './../shared/models/question.model';
import { QuestionService } from './../shared/services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
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
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionService.getAllQuestions().subscribe(result => {
      this.questions = result;
    });
  }
}
