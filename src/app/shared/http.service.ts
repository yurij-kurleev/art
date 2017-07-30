import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(private _http: Http) {
    }

    public get(url: string): Promise<any> {
        return this._http.get(url)
            .toPromise()
            .then((response) => {
            console.log(response);
                return Promise.resolve(response.json());
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    public add(url: string, data: any, file?: File): Promise<any> {
        const headers = new Headers();
        headers.append('Enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({headers: headers});
        const payload = new FormData();
        if (file) {
          payload.append('file', file, file.name);
        }
        payload.append('data', JSON.stringify(data));
        return this._http.post(url, payload, options)
            .toPromise()
            .then((response) => {
                console.log(response);
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
        return this._http.post(url, data)
            .toPromise()
            .then((response) => {
                return Promise.resolve(response.json());
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
}
