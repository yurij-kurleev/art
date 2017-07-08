import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Category} from '../entites/category';

@Injectable()
export class CategoryService extends AbstractService {

  public getAll(): Promise<Category[]> {
    return this.httpService.get(this.baseUrl + 'category/getAll')
      .then((response) => {
        const categories: Category[] = [];
        for (const item of response){
          categories.push(
            new Category(item.id_category, item.title_eng, item.title_ru, item.title_ua)
          );
        }
        return Promise.resolve(categories);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

}
