export class Admin {
  _id: string;
  visible: boolean;
  userid: string;
  title: string;
  created?: Date;
  questions: Question[];
}

export class Option{
  answer: string;
  correct: boolean;
}

export class Question {
  title: string;
  options: Option[];
}
