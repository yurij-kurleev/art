import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    public login: string;
    public password: string;

    constructor(
        private _authService: AuthService,
        private _cookieService: CookieService,
        private _router: Router
    ) {
    }

    ngOnInit() {

    }

    public onAuth () {
        this._authService.authorize({login: this.login, password: this.password})
            .then((response) => {
                this._cookieService.put('admin1', 'true');
                this._router.navigate(['/admin/exhibitions']);
            })
            .catch((error) => {
                alert('Wrong credentials');
                console.log(error);
            });
    }


}
