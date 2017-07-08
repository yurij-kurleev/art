export interface ICategory {
  id: number;
  name: string;
  isActive: boolean;
}

export class Category {
  id: number;
  nameEng: string;
  nameRu: string;
  nameUa: string;
  isActive: boolean;

  constructor(id?: number, nameEng?: string, nameRu?: string, nameUa?: string) {
    this.id = id || 0;
    this.nameEng = nameEng || '';
    this.nameRu = nameRu || '';
    this.nameUa = nameUa || '';
    this.isActive = false;
  }
}
