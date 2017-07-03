import {Component, OnInit} from '@angular/core';
import {LocaleUtil} from './shared/locale.util';
import {CookieService} from 'angular2-cookie/services/cookies.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends LocaleUtil implements OnInit {
  public defaultLanguage = this.languages[0];

  constructor(cookieService: CookieService) {
    super(cookieService);
  }

  ngOnInit(): void {
    this.cookieService.put(this.LANGUAGE_KEY, this.defaultLanguage);
  }

}
