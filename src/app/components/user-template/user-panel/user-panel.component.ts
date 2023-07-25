import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent {
  // Initialize the variables to control the visibility of tasks and notes
  showTasks: boolean = false;
  showNotes: boolean = false;
  constructor(public auth: AuthService, private router: Router) {}
  // Sample data for user tasks and notes (replace with your actual data)
  userTasks = [
    {
      properties: {
        title: { title: [{ plain_text: 'Task 1' }] },
        description: { rich_text: [{ plain_text: 'Description for Task 1' }] },
        due_date: { date: { start: '2023-07-25T00:00:00.000Z' } },
        priority: { select: { name: 'High' } },
      },
    },
    // Add more tasks here...
  ];

  userNotes = [
    {
      properties: {
        title: { title: [{ plain_text: 'Note 1' }] },
        description: { rich_text: [{ plain_text: 'Description for Note 1' }] },
      },
    },
    // Add more notes here...
  ];


  // Method to show user tasks and hide user notes
  showUserTasks() {
    this.showTasks = true;
    this.showNotes = false;
  }

  // Method to show user notes and hide user tasks
  showUserNotes() {
    this.showTasks = false;
    this.showNotes = true;
  }
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  
  logout(): void {
    this.auth.logout();
  }
}

