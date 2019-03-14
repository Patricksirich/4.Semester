import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';
import{ Admin} from '../entities/admin';
import { from } from 'rxjs';
import { Gender } from '../entities/user';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  constructor() { }

  getAdmin() : Admin {
    return{_id: '1', visible: false, userid: '1', title: 'Dogs', 
    questions:[
  {title: 'How many feet do a puddle have', 
    options:[
      {answer: '1', correct: false},
      {answer: '2', correct: false},
      {answer: '3', correct: false},
      {answer: '4', correct: true}
    ]
  },
  {title: 'How long do you need to walk a dog?',
    options:[
      {answer: 'For 10 min.', correct: false},
      {answer: 'For 20 min.', correct: false},
      {answer: 'For 30 min.', correct: true},
      {answer: 'For 40 min.', correct: false}
    ]}] 
};
  }
 
  findQuiz(searchForId: string) : Quiz{
    return this.getQuizzes().find(quiz => quiz._id == searchForId);
  }

  getQuizzes() : Quiz[] {
    return [
      { 
        _id: '1', visible: false, user: {_id: '1', username:'Mikkel', email: 'Mik@Mik.dk', gender: Gender.MALE, birthDate: new Date('12/12/2018')}, title: 'Dogs', created: new Date("12/12/2018"),
        questions: [
          {title: 'How many feet does a puddle have?', 
            options: [
              {answer: '1', correct: false},
              {answer: '2', correct: false},
              {answer: '3', correct: false},
              {answer: '4', correct: true}
            ]
          },
          {title: 'How long do you need to walk a dog?', 
            options: [
              {answer: 'For 10 minutes', correct: false},
              {answer: 'For 20 minutes', correct: false},
              {answer: 'For 30 minutes', correct: true},
              {answer: 'For 40 minutes', correct: false},
            ]}] 
      },
      {
        _id: '2', visible: false, user: {_id: '2', username:'Ver', email: 'ver@ver.dk', gender: Gender.FEMALE, birthDate: new Date('12/12/2017')}, title: 'Dogs', created: new Date("12/12/2018"),
        questions: [ 
          { title: 'How old are Veronique',
          options: [
            { answer: '132 cm', correct: false },
            { answer: '168 cm', correct: false },
            { answer: '171 cm', correct: true },
            { answer: '182 cm', correct: false },
          ]
          }
        ]
      }
    ];
  }

  getQuiz() : Quiz {
    return{_id: '1', visible: false, user: {_id: '2', username:'Ver', email: 'ver@ver.dk', gender: Gender.FEMALE, birthDate: new Date('12/12/2017')}, title: 'Dogs',
          questions:[
        {title: 'How many feet do a puddle have', 
          options:[
            {answer: '1', correct: false},
            {answer: '2', correct: false},
            {answer: '3', correct: false},
            {answer: '4', correct: true}
          ]
        },
        {title: 'How long do you need to walk a dog?',
          options:[
            {answer: 'For 10 min.', correct: false},
            {answer: 'For 20 min.', correct: false},
            {answer: 'For 30 min.', correct: true},
            {answer: 'For 40 min.', correct: false}
          ]}] 
    };
  }
}
