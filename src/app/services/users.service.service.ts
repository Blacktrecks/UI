import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../modules/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  baseApiUrl: string = 'https://localhost:7027';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
   return  this.http.get<User[]>(this.baseApiUrl + '/api/users');

  }

  addUser(addUserRequest: User): Observable<User> {
    addUserRequest.id = '00000000-0000-0000-0000-000000000000';
     return  this.http.post<User>(this.baseApiUrl + '/api/users', addUserRequest);
    }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + "/api/Users/" + id )
  }

    //logare angajat
    getUserId(userIdRequest: User): Observable<User> {

      // 
      return this.http.get<User>(this.baseApiUrl + "/api/Users/" + "login",
      {params: {
        "email": userIdRequest.email,
       
      }})
    }

    //update user
  updateUser(id: string, updateEmployeeRequest: User): Observable<User> {
    return this.http.put<User>(this.baseApiUrl + '/api/Users/' + id,
     updateEmployeeRequest);
   }
   //stergere user
   deleteUser(id: string): Observable<User> {
     return this.http.delete<User>(this.baseApiUrl + '/api/Users/' + id);
    }

    searchUsers(keyword: string): Observable<User[]> {
      const params = new HttpParams().set('keyword', keyword);
      return this.http.get<User[]>(`${this.baseApiUrl}/api/users/search`, { params });
     }
}
