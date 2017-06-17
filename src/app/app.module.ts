import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule,
  MdSelectModule, MdIconModule, MdCardModule, MdListModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExhibitionsComponent
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
    CommonModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
