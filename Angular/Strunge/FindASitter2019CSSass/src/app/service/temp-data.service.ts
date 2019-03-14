import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';
import{ Admin} from '../entities/admin';
import { from } from 'rxjs';

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

  getQuiz() : Quiz {
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
}
