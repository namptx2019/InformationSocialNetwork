import { User } from './../shared/models/user.model';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: string;
  registerControl = {
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
  };
  registerForm: FormGroup = new FormGroup(this.registerControl);

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    if (this.registerForm.controls.rePassword.value !== this.registerForm.controls.password.value) {
      this.error = 'password is incorrect!';
    } else {
      const user = {
        userName: this.registerControl.userName.value,
        email: this.registerControl.email.value,
        password: this.registerControl.password.value,
        phoneNumber: this.registerControl.phoneNumber.value,
        createdAt: moment().toDate(),
        isActive: true
      } as User;

      this.userService.createUser(user).subscribe(() => {
        this.router.navigate(['/login']);
        alert('Register Success!');
      },
      (error) => {
        console.log(error);
      });
    }
  }
}
