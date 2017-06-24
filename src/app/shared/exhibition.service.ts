import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Exhibition} from '../entites/exhibition';


@Injectable()
export class ExhibitionService {
  private baseUrl = 'http://art-backend/server/exhibition/';

  constructor(private _httpService: HttpService) { }

  public getAll(): Promise<Exhibition[]> {
    return this._httpService.get(this.baseUrl + 'getAll')
        .then((response) => {
          const exhibitions: Exhibition[] = [];
          for (const item of response){
            exhibitions.push(new Exhibition(item.id_exhibition, item.name, item.place,
                item.from_datetime, item.till_datetime));
          }
          return Promise.resolve(exhibitions);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
  }

}
