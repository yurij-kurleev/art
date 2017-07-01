import {Category} from './category';
export interface ICreation {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: Category;
}

export class Creation implements ICreation {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: Category;


  constructor(id?: number, name?: string, description?: string,
              image_url?: string, category?: Category) {
    this.id = id || 0;
    this.name = name || '';
    this.description = description || '';
    this.image_url = image_url || '';
    this.category = category || new Category();
  }
}
