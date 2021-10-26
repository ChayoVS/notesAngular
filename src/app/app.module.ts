import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TodoComponent } from './views/todo/todo.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { NoteComponent } from './components/notes-list/note/note.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    NotesListComponent,
    FooterComponent,
    HeaderComponent,
    NoteDetailComponent,
    NotesHeaderComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
