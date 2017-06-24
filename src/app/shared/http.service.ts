import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(private _http: Http) {
    }

    public get(url: string): Promise<any> {
        return this._http.get(url)
            .toPromise()
            .then((response) => {
                return Promise.resolve(response.json());
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    public add(url: string, data: any): Promise<any> {
        return this._http.post(url, data)
            .toPromise()
            .then((response) => {
                return Promise.resolve(response.json());
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    public remove(url: string): Promise<any> {
        return this._http.delete(url)
            .toPromise()
            .then((response) => {
                return Promise.resolve(response.json());
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    public update(url: string, data: any): Promise<any> {
        return this._http.put(url, data)
            .toPromise()
            .then((response) => {
                return Promise.resolve(response.json());
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
}
