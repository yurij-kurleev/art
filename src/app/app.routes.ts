import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExhibitionsComponent} from './exhibitions/exhibitions.component';
import {AboutComponent} from './about/about.component';
import {AdminExhibitionsComponent} from './admin-exhibitions/admin-exhibitions.component';
import {AdminCreationsComponent} from './admin-creations/admin-creations.component';
import {AuthComponent} from './auth/auth.component';
import {AdminGuard} from './shared/admin.guard';
import {NoContentComponent} from './no-content/no-content.component';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'exhibitions',  component: ExhibitionsComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'admin/exhibitions', component: AdminExhibitionsComponent, canActivate: [AdminGuard] },
    { path: 'admin/creations', component: AdminCreationsComponent, canActivate: [AdminGuard] },
    { path: 'auth', component: AuthComponent },
    { path: '**',    component: NoContentComponent },
];
