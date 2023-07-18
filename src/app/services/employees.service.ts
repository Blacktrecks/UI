import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../modules/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = 'https://localhost:7027';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
   return  this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');

  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
  addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return  this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest);
  }


  getEmployee(id: string): Observable<Employee>{
   return this.http.get<Employee>(this.baseApiUrl + '/api/employees/'+ id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
   return this.http.put<Employee>(this.baseApiUrl + '/api/Employees/' + id,
    updateEmployeeRequest);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Employees/' + id);
   }

   searchEmployees(keyword: string): Observable<Employee[]> {
    const params = new HttpParams().set('keyword', keyword);
    return this.http.get<Employee[]>(`${this.baseApiUrl}/api/employees/search`, { params });
   }
}
