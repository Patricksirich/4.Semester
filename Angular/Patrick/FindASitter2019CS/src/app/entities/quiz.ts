import { User } from './user';

export class Quiz {
    _id: string;
    visible: boolean;
    user: User;
    title: string;
    created?: Date; // ? = optional field
    questions: Question[];
}

export class Option{
    answer: string;
    correct: boolean;
}
export class Question{
    title: string;
    options: Option[];
}