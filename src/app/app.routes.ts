import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KwmlistListComponent } from './kwmlist-list/kwmlist-list.component';
import { KwmlistDetailsComponent } from './kwmlist-details/kwmlist-details.component';
import { NoteDetailsComponent } from './note-details/note-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'kwmlists', component: KwmlistListComponent},
    {path: 'kwmlists/:id', component: KwmlistDetailsComponent},
    {path: 'kwmlists/:id/:id', component: NoteDetailsComponent},




];
