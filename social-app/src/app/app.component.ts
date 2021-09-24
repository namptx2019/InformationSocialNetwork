import { DataService } from './shared/services/data.service';
import { UserService } from './shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: any;
  title = 'social-app';

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') as any);
    }
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.user = null;
    window.location.reload();
  }
}
