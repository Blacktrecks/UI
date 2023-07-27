import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, map, of, pipe } from 'rxjs';
import { Note } from 'src/app/modules/note.model';
import {  NotesService } from 'src/app/services/note/note.service';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent implements OnInit {
  userNotes: any[] = [];
  showNotes: boolean = false;
  currentNoteIndex: number = 0; //index of the note
  constructor(public auth: AuthService, private router: Router, private notesService: NotesService) {}
  

  

  ngOnInit() {
    this.getUserNotes();
    this.getUserData()
    .pipe(
      map((user) => {
        console.log(user); // Check if the user information is available
        this.getUserNotes();
      }),
      catchError(err => {return of(err)})
    )
    .subscribe()
      
  }
  
  //show user notes
  showUserNotes(){
    this.showNotes = true;
    
  }

  //show next note
  showNextNote(){
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.userNotes.length;
  }

  getUserData(){
    return this.auth.user$
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
    this.router.navigate([""])
  }
}

