import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent {
  noteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private noteService: NotesService
  ) {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      date:  ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.noteForm.valid) {
      this.noteService.addNote(this.noteForm.value).subscribe(
        () => {
          // Note added successfully, navigate back to the user panel
          this.router.navigate(['/userpanel']);
        },
        (error) => {
          // Handle error, e.g., show an error message
          console.error('Error adding note:', error);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/userpanel']); // Navigate back to the user panel without adding a note
  }
}
