import { Question } from './../shared/models/question.model';
import { QuestionService } from './../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  // public question = {
  //   tag: ['#math', '#logic'],
  //   category: 'Math',
  //   title: 'I have a question base on a theory about Pi number',
  //   content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  //   creatorName: 'Lam Xa',
  //   userPic: 'https://bitly.com.vn/vthasz',
  //   createdDate: '30/8/2021',
  //   rating: 50,
  // };

  public question: Question;

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
      userPic: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/158484629_2234688270001439_1391302717887745551_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=M3IWruhg0U8AX8BF749&_nc_ht=scontent.fsgn2-4.fna&oh=2ee784aa8e33b57a0d888e4ac11b309d&oe=6172EC69',
      createdDate: '30/8/2021',
      rating: 2
    },
  ];
  faStar = faStar;
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.questionService.getQuestionDetail(+id).subscribe(res => {
      this.question = res;
    });
  }
}
