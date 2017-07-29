import {Injectable} from '@angular/core';
import {Exhibition} from '../entites/exhibition';
import {AbstractService} from './abstract.service';

@Injectable()
export class ExhibitionService extends AbstractService {

    public getAll(): Promise<Exhibition[]> {
        return this.httpService.get(this.baseUrl + 'exhibition/getAll')
            .then((response) => {
                const exhibitions: Exhibition[] = [];
                for (const item of response) {
                    exhibitions.push(new Exhibition(item.id_exhibition, item.name, item.place,
                        item.from_datetime, item.till_datetime));
                }
                return Promise.resolve(exhibitions);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    public addExhibition (data) {
        return this.httpService.add(this.baseUrl + 'exhibition/add', data)
            .then((response) => {
                return Promise.resolve(<Exhibition>response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
}
