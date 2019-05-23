import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './entities/quiz';

@Pipe({
  name: 'quizPipe' // used when we apply the pipe/filter
})
export class QuizPipe implements PipeTransform {

  transform(quizzes: Quiz[], search?: any): any {
    console.log(quizzes);
    console.log(search);
    if(search == undefined){
      return quizzes;
    }

    // write code that only returns the quiz objects that matches the search

    return quizzes.filter(quiz => quiz.title.indexOf(search) != -1);
  }

}
