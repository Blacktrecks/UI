import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { Employee } from 'src/app/modules/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
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

  constructor(private employeeService: EmployeesService, private router: Router, private snackBar: MatSnackBar) { } // Inject MatSnackBar here

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => {
          this.snackBar.open('Employee successfully added', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['employees']);
        },
        error: (err) => {
          // Handle error if necessary and show snackbar with appropriate error message if desired
        }
      });
  }
}
