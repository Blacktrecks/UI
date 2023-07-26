import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/modules/assignment.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AssignmentService {

  baseApiUrl: string = 'https://localhost:7027';

  constructor(private http: HttpClient) { }

  getAllAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.baseApiUrl +'/api/assignment');
  }

  addAssignment(addAssignmentRequest: Assignment): Observable<Assignment> {
    addAssignmentRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Assignment>(this.baseApiUrl + '/api/assignment', addAssignmentRequest);
  }

  getAssignment(id: string): Observable<Assignment> {
    return this.http.get<Assignment>(this.baseApiUrl +'/api/Assignments/' +id);
  }

  updateAssignment(id: string, updateAssignmentRequest: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(this.baseApiUrl + '/api/assignments/'+ id, updateAssignmentRequest);
  }

  deleteAssignment(id: string): Observable<Assignment> {
    return this.http.delete<Assignment>(this.baseApiUrl + '/api/assignments/' + id);
  }

  searchAssignment(keyword: string): Observable<Assignment[]> {
    const params = new HttpParams().set('keyword', keyword);
    return this.http.get<Assignment[]>(`${this.baseApiUrl}/api/assignments/search`, { params });
  }
}
