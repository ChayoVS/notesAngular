import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';


@Component({
  selector: 'app-notes-header',
  templateUrl: './notes-header.component.html',
  styleUrls: ['./notes-header.component.css']
})
export class NotesHeaderComponent implements OnInit {

  selectedNote = false;
  disableEditing = false;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.noteClickSubscription.subscribe(data => {
      this.selectedNote = true;
    });
  }

  addEditNoteHandler() {
    this.notesService.noteAddEditHandler();
    this.selectedNote = true;
  }

  deleteNoteHandler() {
    this.notesService.noteDeleteHandler();
    this.selectedNote = false;
  }

  toggleHandler() {
    this.notesService.noteToggleHandler();
  }

  searchHandler(inputEl: any) {
    this.notesService.searchHandler(inputEl.value);
  }

  disableEditingHandler(){
    this.disableEditing = !this.disableEditing;
    this.notesService.disableEditingSubscription.next({'disableEditing': this.disableEditing});
  }

}
