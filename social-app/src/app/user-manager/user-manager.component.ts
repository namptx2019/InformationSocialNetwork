import { DataService } from './../shared/services/data.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  isChangePw: boolean;
  pwForm: FormGroup;
  error: string;

  constructor(private userService: UserService, public dataService: DataService) {
    this.pwForm = new FormGroup({
      oldPw: new FormControl('', [Validators.required]),
      newPw: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  changePassword(): void {
    this.isChangePw = true;
  }

  submitChange(): void {
    if (this.pwForm.controls.oldPw.value !== this.dataService.user.password) {
      this.error = 'Old Password is wrong';
    } else {
      const user = this.dataService.user;
      user.password = this.pwForm.controls.newPw.value;
      this.userService.updatePwUser(this.dataService.user.userId, user).subscribe(() => {
        this.isChangePw = false;
      });
    }
  }
}
