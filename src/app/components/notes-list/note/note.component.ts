import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: any;
  
  @Output('noteClicked') noteClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  noteClickHandler() {
    this.noteClicked.emit();
  }

}
