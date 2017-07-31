import {Component, OnInit} from '@angular/core';
import {LocaleUtil} from './shared/locale.util';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {AbstractService} from "./shared/abstract.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends LocaleUtil implements OnInit {
    public defaultLanguage = this.languages[0];

    constructor(
        public cookieService: CookieService,
        private _abstractService: AbstractService
    ) {
        super(cookieService);
    }

    ngOnInit(): void {
        this.cookieService.put(this.LANGUAGE_KEY, this.defaultLanguage);
    }

    public isAdmin() {
        return window.location.href.search('admin') !== -1;
    }

    public isCorrectUrl() {
        console.log(this._abstractService.isCorrectUrl);
        return this._abstractService.isCorrectUrl;
    }
}
