import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule,
  MdSelectModule, MdIconModule, MdCardModule, MdListModule, MdDatepickerModule, MdNativeDateModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import {ExhibitionService} from './shared/exhibition.service';
import {HttpService} from './shared/http.service';
import {CreationService} from './shared/creation.service';
import {CategoryService} from './shared/category.service';
import {AbstractService} from './shared/abstract.service';
import { AdminExhibitionsComponent } from './admin-exhibitions/admin-exhibitions.component';
import { AdminCreationsComponent } from './admin-creations/admin-creations.component';
import { AuthComponent } from './auth/auth.component';
import {AdminGuard} from './shared/admin.guard';
import {AuthService} from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExhibitionsComponent,
    AdminExhibitionsComponent,
    AdminCreationsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CommonModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ExhibitionService,
    HttpService,
    CreationService,
    AbstractService,
    CategoryService,
    CookieService,
    AdminGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
