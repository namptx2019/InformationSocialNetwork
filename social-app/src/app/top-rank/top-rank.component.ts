import { DataService } from './../shared/services/data.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-rank',
  templateUrl: './top-rank.component.html',
  styleUrls: ['./top-rank.component.scss']
})
export class TopRankComponent implements OnInit {

  public users = [
    {
      name: 'Nam Phan',
      raking: 5,
      userPic: 'https://bitly.com.vn/m4zfji'
    },
    {
      name: 'Anh Quan',
      raking: 5,
      userPic: 'https://bitly.com.vn/jilf9e'
    },
    {
      name: 'Khoa Tran',
      raking: 5,
      userPic: 'https://bitly.com.vn/c6atka'
    },
  ];

  faStar = faStar;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
