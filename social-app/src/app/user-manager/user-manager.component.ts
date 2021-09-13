import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  constructor(private userService: UserService) { }
  public me: User;

  ngOnInit(): void {
    this.userService.getMe(1).subscribe(x => {
      this.me = x;
    });
  }

}
