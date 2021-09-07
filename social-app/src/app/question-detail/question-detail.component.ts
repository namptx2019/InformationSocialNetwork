import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  public question = {
    tag: ['#math', '#logic'],
    category: 'Math',
    title: 'I have a question base on a theory about Pi number',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    creatorName: 'Lam Xa',
    userPic: 'https://bitly.com.vn/vthasz',
    createdDate: '30/8/2021',
    rating: 50,
  };

  public answers = [
    {
      content: 'its hard to think....',
      creatorName: 'Khoa Tran',
      userPic: 'https://bitly.com.vn/c6atka',
      createdDate: '30/8/2021',
      rating: 2
    },
    {
      content: 'I think this will help.',
      creatorName: 'Nam Phan',
      userPic: 'https://bitly.com.vn/m4zfji',
      createdDate: '30/8/2021',
      rating: 2
    },
  ];
  faStar = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
