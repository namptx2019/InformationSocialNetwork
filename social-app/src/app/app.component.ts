import { DataService } from './shared/services/data.service';
import { UserService } from './shared/services/user.service';
import { Component } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user = {
    name: 'Nam Phan',
    userPic: 'https://bitly.com.vn/m4zfji',
  };
  title = 'social-app';

  constructor(public dataService: DataService) {
    const a = this.dataService.user;
  }

  logOut(): void {
    this.dataService.user = new User();
    this.dataService.isLogin = false;
  }
}
