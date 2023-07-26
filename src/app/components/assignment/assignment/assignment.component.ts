import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assignment } from 'src/app/modules/assignment.model';
import { AssignmentService } from 'src/app/services/assignment/assignment.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private assignmentService: AssignmentService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.assignmentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: [new Date(), Validators.required], // Default value is the current date
      completed: [false, Validators.required], // Default value is false (not completed)
    });
  }

  onSubmit() {
    if (this.assignmentForm.valid) {
      // The form is valid, create an Assignment object from the form values
      const newAssignment: Assignment = {
        id: '',
        title: this.assignmentForm.value.title,
        description: this.assignmentForm.value.description,
        dueDate: new Date(this.assignmentForm.value.date),
        completed: this.assignmentForm.value.completed,
      };

      // Now you can use the newAssignment object to add the assignment
      // using the AssignmentService or perform other actions
      // For example, if you want to add the assignment using the service:
      this.assignmentService.addAssignment(newAssignment).subscribe(
        (addedAssignment) => {
          console.log('Assignment added:', addedAssignment);
          // Do something else after adding the assignment, e.g., redirect to a different page.
        },
        (error) => {
          console.error('Error adding assignment:', error);
        }
      );
    }
  }

  onCancel() {
    // Reset the form if user clicks cancel
    this.assignmentForm.reset();
  }
}
