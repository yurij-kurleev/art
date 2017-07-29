import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExhibitionsComponent} from './exhibitions/exhibitions.component';
import {AboutComponent} from './about/about.component';
import {AdminExhibitionsComponent} from './admin-exhibitions/admin-exhibitions.component';
import {AdminCreationsComponent} from './admin-creations/admin-creations.component';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'exhibitions',  component: ExhibitionsComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'admin/exhibitions', component: AdminExhibitionsComponent },
    { path: 'admin/creations', component: AdminCreationsComponent },
    { path: '**',    component: HomeComponent },
];
