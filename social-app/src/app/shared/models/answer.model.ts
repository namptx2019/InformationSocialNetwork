import { User } from './user.model';
export class Answer {
    answerId: number;
    answerContent: string;
    questionId: number;
    userId: number;
    imageUrl: string;
    refUrl: string;
    rating: number;
    isActive: boolean;
    createDate: Date;
    updateDate: Date;
    user: User;
}
