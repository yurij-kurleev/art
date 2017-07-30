import {Injectable} from '@angular/core';
import {Creation} from '../entites/creation';
import {AbstractService} from './abstract.service';
import {Category} from '../entites/category';

@Injectable()
export class CreationService extends AbstractService {

  public baseUrl = this.baseUrl + 'painting/';

  public getAll(): Promise<Creation[]> {
    const url: string = this.baseUrl + `getAll`;
    return this.httpService.get(url)
      .then(response => {
        const creations: Array<Creation> = [];
        for (const item of response) {
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

    public getCreations(limit: number, offset: number,
                        categoryId?: number): Promise<Creation[]> {
        let url: string = this.baseUrl + `getByPages/${limit}/${offset}/`;
        if (categoryId) {
            url += categoryId;
        }
        return this.httpService.get(url)
            .then(response => {
                const creations: Array<Creation> = [];
                for (const item of response) {
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


  addCreation(data: Creation, file?: File) {
    return this.httpService.add(this.baseUrl + 'add', data, file)
      .then((response) => {
        const category: Category = new Category(response.id_category);
        const creation = new Creation(
          response.id_painting,
          response.name,
          response.description,
          response.image_url,
          category
        );
        return Promise.resolve(creation);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  public deleteCreation (id: number) {
    return this.httpService.remove(this.baseUrl + 'delete/' + id)
      .then((response) => {
        const category: Category = new Category(response.id_category);
        const creation = new Creation(
          response.id_painting,
          response.name,
          response.description,
          response.image_url,
          category
        );
        return Promise.resolve(creation);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
