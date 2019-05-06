import { Injectable } from '@angular/core';
import { Quiz } from './entities/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {
  private baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { 
  }

  createQuiz(quiz: Quiz) : Observable<any> {
    // Call web service
    console.log(this.baseUrl)
    return this.http.post(this.baseUrl, quiz);
  }

  getAllQuizzes() : Observable<Quiz[]> {
    let quiz, [] = this.http.get(this.baseUrl)
    return quiz;
  }

  updateQuiz(quiz: Quiz) : Observable<any> {
    return undefined;
  }

  deleteQuiz(id: string) : Observable<any>{
    //return this.http.delete();
    return undefined;
  }

}