import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/modules/employee.model';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  searchKeyword: string = '';
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
  }

  searchEmployees(): void {
    if (this.searchKeyword.trim() !== '') {
      this.employeesService.searchEmployees(this.searchKeyword)
        .subscribe({
          next: (employees) => {
            this.employees = employees;
          },
          error: (response) => {
            console.log(response);
          }
        });
    }
  }
}
