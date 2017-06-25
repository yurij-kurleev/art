import { Injectable } from '@angular/core';
import {Painting} from '../entites/painting';
import {AbstractService} from './abstract.service';
import {Category} from '../entites/category';

@Injectable()
export class PaintingService extends AbstractService {

  public getPaintings(limit: number, offset: number,
                      categoryId?: number): Promise<Painting[]> {
    let url: string = this.baseUrl + `getByPages/${limit}/${offset}/`;
    if (categoryId) {
      url += categoryId;
    }
    return this.httpService.get(url)
      .then(response => {
        const paintings: Array<Painting> = [];
        for (const item of response){
          const category: Category = new Category(item.id_category);
          paintings.push(
            new Painting(item.id_painting, item.name,
              item.description, item.image_url, category)
          );
        }
        return Promise.resolve(paintings);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
