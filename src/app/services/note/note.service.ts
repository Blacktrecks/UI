import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/modules/note.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseApiUrl: string = 'https://localhost:7027';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseApiUrl +'/api/notes');
  }

  addNote(addNoteRequest: Note): Observable<Note> {
    addNoteRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Note>(this.baseApiUrl + '/api/notes', addNoteRequest);
  }

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(this.baseApiUrl +'/api/Notes/' +id);
  }

  updateNote(id: string, updateNoteRequest: Note): Observable<Note> {
    return this.http.put<Note>(this.baseApiUrl + '/api/notes/'+ id, updateNoteRequest);
  }

  deleteNote(id: string): Observable<Note> {
    return this.http.delete<Note>(this.baseApiUrl + '/api/notes/' + id);
  }

  searchNotes(keyword: string): Observable<Note[]> {
    const params = new HttpParams().set('keyword', keyword);
    return this.http.get<Note[]>(`${this.baseApiUrl}/api/notes/search`, { params });
  }
}
