import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KwmlistListComponent } from './kwmlist-list/kwmlist-list.component';
import { KwmlistDetailsComponent } from './kwmlist-details/kwmlist-details.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagFormComponent } from './tag-form/tag-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'kwmlists', component: KwmlistListComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'tags', component: TagListComponent },
    { path: 'kwmlists/:id', component: KwmlistDetailsComponent },
    { path: 'kwmlists/:id/:id', component: NoteDetailsComponent },

    { path: 'tags/edit', component: TagFormComponent },
    { path: 'tags/edit/:id', component: TagFormComponent }




];
