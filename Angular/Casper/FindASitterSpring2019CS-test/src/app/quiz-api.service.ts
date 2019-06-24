import { Injectable } from '@angular/core';
import { Quiz } from './entities/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {
  private baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships/';

  constructor(private http: HttpClient) {
  }

  createQuiz(quiz: Quiz) : Observable<any> {
    console.log(this.baseUrl)
    quiz.customerId = 'CFA'
    quiz.created = new Date()
    return this.http.post(this.baseUrl, quiz);
  }


  getAllQuizzes() : Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl)

  }

  updateQuiz(quiz: Quiz) : Observable<any> {
    quiz.created = new Date()
    return this.http.put(this.baseUrl + quiz._id, quiz)
  }

  deleteQuiz(quizId: string) : Observable<any>{
    return this.http.delete(this.baseUrl + quizId)
  }

}
