import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/modules/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

//obiect cu parametrii 
export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
    idAvatar: '',
    Avatar: ''
  };

  //ce trimiti pentru request in back end
  constructor(private employeeService: EmployeesService, private router: Router ) {}


ngOnInit(): void {

}

addEmployee() {
  this.employeeService.addEmployee(this.addEmployeeRequest)
  .subscribe({
    next: (employee) => {
      this.router.navigate(['employees']);
    }
  });
}

}
