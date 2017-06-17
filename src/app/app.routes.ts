import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExhibitionsComponent} from './exhibitions/exhibitions.component';
import {AboutComponent} from './about/about.component';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'exhibitions',  component: ExhibitionsComponent },
    { path: 'about',  component: AboutComponent },
    { path: '**',    component: HomeComponent },
];
