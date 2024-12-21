import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { MylibraryComponent } from './features/mylibrary/mylibrary/mylibrary.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'library', component: MylibraryComponent },
];
