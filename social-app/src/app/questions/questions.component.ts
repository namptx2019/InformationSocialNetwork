import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questions = [
    {
      tag: ['#math', '#logic'],
      category: 'Math',
      title: 'I have a question base on a theory about Pi number',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Khoa Tran',
      userPic: 'https://scontent.fpnh22-4.fna.fbcdn.net/v/t1.18169-1/p200x200/29570715_1318050761630440_4531318558612116906_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=MmoArs4yVLcAX-Cs1kB&tn=1Apgk1inCsmEJqYD&_nc_ht=scontent.fpnh22-4.fna&oh=1970934136989c31e9d1c41819d87d49&oe=615CB423',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#tech', '#logictech', '#samsung'],
      category: 'TECHNOLOGY',
      title: 'About FaceId of Samsung, is it worth to try???',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Nam Phan',
      userPic: 'https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.6435-9/158484629_2234688270001439_1391302717887745551_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5CDZOc5rCkQAX-sXJUz&_nc_ht=scontent.fpnh22-3.fna&oh=1ac28d255b7b7885e27442f2c226ccf8&oe=615B3169',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#math', '#logic'],
      category: 'Math',
      title: 'I have a question base on a theory about Pi number',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Anh Quan',
      userPic: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/147249846_2478276195651618_2823698869454993370_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7Qk-TI8cNPgAX8DJcmS&_nc_ht=scontent.fsgn2-6.fna&oh=eaac20a2690b9d5e0bb7c9fb86ea4884&oe=6159F48F',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#tech', '#logictech', '#samsung'],
      category: 'TECHNOLOGY',
      title: 'About FaceId of Samsung, is it worth to try???',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Nam Phan',
      userPic: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/147249846_2478276195651618_2823698869454993370_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7Qk-TI8cNPgAX8DJcmS&_nc_ht=scontent.fsgn2-6.fna&oh=eaac20a2690b9d5e0bb7c9fb86ea4884&oe=6159F48F',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#math', '#logic'],
      category: 'Math',
      title: 'I have a question base on a theory about Pi number',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Nam Phan',
      userPic: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/147249846_2478276195651618_2823698869454993370_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7Qk-TI8cNPgAX8DJcmS&_nc_ht=scontent.fsgn2-6.fna&oh=eaac20a2690b9d5e0bb7c9fb86ea4884&oe=6159F48F',
      createdDate: '30/8/2021'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
