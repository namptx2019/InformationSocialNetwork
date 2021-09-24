import { Answer } from './answer.model';
export class Question {
    questionId: number;
    title: string;
    tag: string;
    content: string;
    rating: number;
    categoryId: number;
    creatorId: number;
    creatorName: string;
    creatorPic: string;
    isActive: boolean;
    isAdmin: boolean;
    createdAt: Date;
    updateAt: Date;
    answers: Answer[];
}
