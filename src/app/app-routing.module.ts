import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TodoComponent } from './views/todo/todo.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'to-do', 
    component: TodoComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
