import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modules/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = []; // Added property for filtered results
  searchKeyword = ''; // Added property for search keyword

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
      .subscribe({
        next: (employees) => {
          this.employees = employees;
          this.filteredEmployees = employees; // Initialize filtered results with all employees
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  
}
