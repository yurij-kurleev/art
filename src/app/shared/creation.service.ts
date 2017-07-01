import { Injectable } from '@angular/core';
import {Creation} from '../entites/creation';
import {AbstractService} from './abstract.service';
import {Category} from '../entites/category';

@Injectable()
export class CreationService extends AbstractService {

  public getCreations(limit: number, offset: number,
                      categoryId?: number): Promise<Creation[]> {
    let url: string = this.baseUrl + `getByPages/${limit}/${offset}/`;
    if (categoryId) {
      url += categoryId;
    }
    return this.httpService.get(url)
      .then(response => {
        const creations: Array<Creation> = [];
        for (const item of response){
          const category: Category = new Category(item.id_category);
          creations.push(
            new Creation(item.id_painting, item.name,
              item.description, item.image_url, category)
          );
        }
        return Promise.resolve(creations);
      })
      .catch(error => {
        if (error.status === 404) {
          return Promise.reject([]);
        }
        return Promise.reject(error);
      });
  }
}
