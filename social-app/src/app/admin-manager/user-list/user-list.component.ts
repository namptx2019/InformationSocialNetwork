import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  blockUser(user: User): void {
    user.isActive = !user.isActive;
    this.userService.updatePwUser(user.userId, user).subscribe(() => {
      window.alert(`${!user.isActive ? 'Block' : 'Unblock'} User ${user.userId} success!`);
      this.loadUsers();
    });
  }
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      window.alert(`Delete User ${id} success!`);
      this.loadUsers();
    });
  }

}
