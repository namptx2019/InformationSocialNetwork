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
      userPic: 'https://bitly.com.vn/c6atka',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#tech', '#logictech', '#samsung'],
      category: 'TECHNOLOGY',
      title: 'About FaceId of Samsung, is it worth to try???',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Nam Phan',
      userPic: 'https://bitly.com.vn/m4zfji',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#math', '#logic'],
      category: 'Math',
      title: 'I have a question base on a theory about Pi number',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Anh Quan',
      userPic: 'https://bitly.com.vn/jilf9e',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#tech', '#logictech', '#samsung'],
      category: 'TECHNOLOGY',
      title: 'About FaceId of Samsung, is it worth to try???',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Son Nguyen',
      userPic: 'https://bitly.com.vn/6784q9',
      createdDate: '30/8/2021'
    },
    {
      tag: ['#math', '#logic'],
      category: 'Math',
      title: 'I have a question base on a theory about Pi number',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      creatorName: 'Lam Xa',
      userPic: 'https://bitly.com.vn/vthasz',
      createdDate: '30/8/2021'
    }
  ];

  public filterOption = [
    {
      value: 1,
      title: 'Latest'
    },
    {
      value: 2,
      title: 'Oldest'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
