export class Quiz{
    _id: string;
    visible: boolean;
    userid: string;
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