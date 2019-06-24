import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships/';

  constructor(private http: HttpClient) {
  }

  createUser(user: User) : Observable<any> {
    console.log(this.baseUrl)
    user.localId = 'Studene'
    return this.http.post(this.baseUrl, user);
  }


  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  updateUser(user: User, userId: string) : Observable<any> {
    return this.http.put(this.baseUrl + userId, user)
  }

  deleteUser(userId: string) : Observable<any>{
    return this.http.delete(this.baseUrl + userId)
  }

}
