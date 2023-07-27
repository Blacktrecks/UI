import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Assignment } from 'src/app/modules/assignment.model';
import { AssignmentService } from 'src/app/services/assignment/assignment.service';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  adminAssignments: any[] = [];
  showAssignments: boolean = false;
  currentNoteIndex: number = 0; //index of the assignment 
  constructor(private navbarToggleService: NavbarToggleService,public auth: AuthService, private router: Router, private assignmentService: AssignmentService) {
    this.navbarToggleService.setShowNavbar(false);
  }

  
  ngOnInit() {
    this.getAdminAssignments(); // Call the method to fetch user notes when the component is initialized
    this.auth.user$.subscribe(user => {
      console.log(user)
    })
  }

  
  
  //show user notes
  showUserNotes(){
    this.showAssignments = true;
    
  }

  //show next note
  showNextNote(){
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.adminAssignments.length;
  }

  
  getAdminAssignments() {
    this.assignmentService.getAllAssignments().subscribe(
      (assignments) => {
        this.adminAssignments = assignments;
      },
      (error) => {
        console.error('Error fetching user notes:', error);
      }
    );
  }

  // Method to create a new note
  createNewAssignment() {
    const newAssignment: Assignment = {
      id: '',
      title: 'New Note',
      description: 'Enter your note content here.',
      dueDate:  new Date(),
      completed: false,
   
    };

    this.assignmentService.addAssignment(newAssignment).subscribe(
      (addedAssignment) => {
        // Note added successfully, refresh the notes list
        this.getAdminAssignments();
      },
      (error) => {
        console.error('Error adding note:', error);
      }
    );
  }

  logout(): void {
    this.auth.logout();
  }

  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}
}
