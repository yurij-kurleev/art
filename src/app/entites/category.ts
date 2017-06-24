export interface ICategory {
  id: number;
  name: string;
}

export class Category {
  id: number;
  name: string;

  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || '';
  }
}
