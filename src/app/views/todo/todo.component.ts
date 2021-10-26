import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  hideSideNav = false;
  title = 'Note App';

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.showHideSubscription.subscribe(() => {
      this.hideSideNav = !this.hideSideNav;
    });
  }

}
