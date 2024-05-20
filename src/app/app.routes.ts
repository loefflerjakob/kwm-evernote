import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KwmlistListComponent } from './kwmlist-list/kwmlist-list.component';
import { KwmlistDetailsComponent } from './kwmlist-details/kwmlist-details.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagFormComponent } from './tag-form/tag-form.component';
import { KwmlistFormComponent } from './kwmlist-form/kwmlist-form.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'kwmlists', component: KwmlistListComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'tags', component: TagListComponent },
    { path: 'kwmlists/:id', component: KwmlistDetailsComponent },
    { path: 'kwmlists/:id/:id', component: NoteDetailsComponent },

    { path: 'edit/tag', component: TagFormComponent },
    { path: 'edit/tag/:id', component: TagFormComponent },

    { path: 'edit/kwmlist', component: KwmlistFormComponent },
    { path: 'edit/kwmlist/:id', component: KwmlistFormComponent },

    { path: 'edit/note', component: NoteFormComponent },
    { path: 'edit/note/:id', component: NoteFormComponent },

    { path: 'edit/todo', component: TodoFormComponent },
    { path: 'edit/todo/:id', component: TodoFormComponent },

    { path: 'login', component: LoginComponent}



];
