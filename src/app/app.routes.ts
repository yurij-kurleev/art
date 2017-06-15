import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'exhibitions',  component: HomeComponent },
    { path: 'about',  component: HomeComponent },
    { path: 'contacts',  component: HomeComponent },
    { path: '**',    component: HomeComponent },
];
