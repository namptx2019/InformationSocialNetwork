import { DataService } from './../shared/services/data.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  isChangePw: boolean;
  pwForm: FormGroup;
  error: string;
  user: User;
  faStar = faStar;

  constructor(private userService: UserService, public dataService: DataService, private questionService: QuestionService) {
    this.pwForm = new FormGroup({
      oldPw: new FormControl('', [Validators.required]),
      newPw: new FormControl('', [Validators.required])
    });
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') as any);
    }
    this.loadQuestion();
  }

  questions: Question[];

  ngOnInit(): void {
  }

  changePassword(): void {
    this.isChangePw = true;
  }

  submitChange(): void {
    if (this.pwForm.controls.oldPw.value !== this.user.password) {
      this.error = 'Old Password is wrong';
    } else {
      const user = this.user;
      user.password = this.pwForm.controls.newPw.value;
      this.userService.updatePwUser(this.user.userId, user).subscribe(() => {
        this.isChangePw = false;
      });
    }
  }

  loadQuestion(): void {
    this.questionService.getUserQuestions(this.user.userId).subscribe(res => {
      this.questions = res;
    });
  }
}
