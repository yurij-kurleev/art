import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class AuthService {
    public baseUrl = 'http://shchokina.com/server/user/me';

    constructor (private _http: Http) {}

    public authorize(loginData): Promise<any> {
        const headers = new Headers();
        headers.append('Enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({headers: headers});
        const payload = new FormData();
        payload.append('data', JSON.stringify(loginData));
        return this._http.post(this.baseUrl, payload, options)
            .toPromise()
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
}
