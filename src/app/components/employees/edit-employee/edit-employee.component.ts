import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { Employee } from 'src/app/modules/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
 
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
    idAvatar: '',
    Avatar: ''
  };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar here
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.employeeService.getEmployee(id).subscribe((response) => {
          this.employeeDetails = response;
        });
      }
    });
  }
  
  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (response) => {
          this.snackBar.open('Employee successfully edited', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['employees']);
        },
        error: (err) => {
          // Handle error if necessary and show snackbar with appropriate error message if desired
        }
      });
  }

  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.snackBar.open('Employee successfully deleted', 'Close', {
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
