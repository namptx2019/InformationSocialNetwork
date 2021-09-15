import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './../shared/services/data.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginControl = {
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  };
  loginForm: FormGroup = new FormGroup(this.loginControl);
  error: string;

  constructor(private router: Router, private userService: UserService, private dataService: DataService) {}

  ngOnInit(): void {
  }

  login(): void {
    this.error = '';
    this.userService.logIn(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe((user) => {
      if (user) {
        this.dataService.user = user;
        this.dataService.isLogin = true;
        this.router.navigate(['']);
      } else {
        this.error = 'Email or password is wrong!';
      }
    });
  }
}
