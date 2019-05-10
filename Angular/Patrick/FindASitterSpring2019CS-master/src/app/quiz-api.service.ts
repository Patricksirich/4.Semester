import { Injectable } from '@angular/core';
import { Quiz } from './entities/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {
  private baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships/';

  constructor(private http: HttpClient) { 
  }

  createQuiz(quiz: Quiz) : Observable<any> {
    // Call web service
    console.log(this.baseUrl)
    quiz.created = new Date()
    return this.http.post(this.baseUrl, quiz);
  }

  getAllQuizzes() : Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl)
    
  }

  updateQuiz(quiz: Quiz) : Observable<any> {
    return this.http.put(this.baseUrl, quiz)
  }

  deleteQuiz(id: string) : Observable<any>{
    //return this.http.delete();
    console.log(id + ' From deleteAPI')
    return this.http.delete(this.baseUrl + id)
  }

}