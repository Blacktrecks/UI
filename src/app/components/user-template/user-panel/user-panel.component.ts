import { Component, OnInit } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';
import { Client } from '@notionhq/client';
import { NotionService } from 'src/app/services/notion.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userTasks: any[] = [];
  userNotes: any[] = [];
  showTasks: boolean = false;
  showNotes: boolean = false;

  constructor(private navbarToggleService: NavbarToggleService, private notionService: NotionService) {
    this.navbarToggleService.setShowNavbar(false);
  }
  ngOnInit(): void {
    // Fetch user tasks from Notion database
    this.notionService.getUserTasks().then(tasks => {
      this.userTasks = tasks;
    });

    // Fetch user notes from Notion database
    this.notionService.getUserNotes().then(notes => {
      this.userNotes = notes;
    });
  }

  // Show user tasks when the 'User Tasks' tab is clicked
  showUserTasks() {
    this.showTasks = true;
    this.showNotes = false;
  }

  // Show user notes when the 'User Notes' tab is clicked
  showUserNotes() {
    this.showTasks = false;
    this.showNotes = true;
  }
}