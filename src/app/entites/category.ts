export interface ICategory {
  id: number;
  name: string;
  isActive: boolean;
}

export class Category {
  id: number;
  name: string;
  isActive: boolean;

  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || '';
    this.isActive = false;
  }
}
