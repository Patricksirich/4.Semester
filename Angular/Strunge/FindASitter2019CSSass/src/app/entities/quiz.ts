import { User } from './user';

export class Quiz{
    _id: string;
    visible: boolean;
    user: User; // This might be old, not updated data, but faster.
    title: string;
    created?: Date; // ? = optional field(s)
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