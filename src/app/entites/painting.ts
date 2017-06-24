import {Category} from './category';
export interface IPainting {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: Category;
}

export class Painting implements IPainting {
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
