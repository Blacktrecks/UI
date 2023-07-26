import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Note } from 'src/app/modules/note.model';
import {  NotesService } from 'src/app/services/note/note.service';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent {
  userNotes: any[] = [];
  showNotes: boolean = false;
  constructor(public auth: AuthService, private router: Router, private notesService: NotesService) {}
  

  ngOnInit() {
    this.getUserNotes(); // Call the method to fetch user notes when the component is initialized
  }
  
  //show user notes
  showUserNotes(){
    this.showNotes = true;
    
  }

  
  getUserNotes() {
    this.notesService.getAllNotes().subscribe(
      (notes) => {
        this.userNotes = notes;
      },
      (error) => {
        console.error('Error fetching user notes:', error);
      }
    );
  }

  // Method to create a new note
  createNewNote() {
    const newNote: Note = {
      id: '',
      title: 'New Note',
      content: 'Enter your note content here.',
      date:  'enter date.',
   
    };

    this.notesService.addNote(newNote).subscribe(
      (addedNote) => {
        // Note added successfully, refresh the notes list
        this.getUserNotes();
      },
      (error) => {
        console.error('Error adding note:', error);
      }
    );
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

