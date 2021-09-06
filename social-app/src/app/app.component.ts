import { Component } from '@angular/core';

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
}
