import { Question } from './../../shared/models/question.model';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public questions: Question[] = [];
  @Input() questionList: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    this.questionService.getAllQuestions().subscribe(res => {
      this.questions = res;
    });
  }

  blockQuestion(question: Question): void {
    question.isActive = !question.isActive;
    this.questionService.updateQuestion(question.questionId, question).subscribe(() => {
      window.alert(`${!question.isActive ? 'Block' : 'Unblock'} User ${question.questionId} success!`);
      this.loadQuestion();
    });
  }
  deleteUser(id: number): void {
    this.questionService.deleteQuestion(id).subscribe(() => {
      window.alert(`Delete User ${id} success!`);
      this.loadQuestion();
    });
  }
}
