import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './entities/quiz';

@Pipe({
  name: 'quizPipe' // used when i apply the pipe
})
export class QuizPipe implements PipeTransform {

  transform(quizzes: Quiz[], search: any): any {
    console.log(quizzes);
    console.log(search);

    if (search == undefined) {

      // Write code that returns what is serached for

      return quizzes;
    }
    return quizzes.filter(quiz => quiz.title.indexOf(search) != -1)
  }

}
