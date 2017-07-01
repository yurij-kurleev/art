import {Component, OnInit } from '@angular/core';
import {Creation} from '../entites/creation';
import {CreationService} from '../shared/creation.service';
import {Category} from '../entites/category';
import {CategoryService} from '../shared/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private currentCategoryId = null;
  private pageSize = 4;
  public creations: Array<Creation> = [];
  public categories: Array<Category> = [];

  constructor(private _creationService: CreationService,
              private _categoryService: CategoryService) { }

  ngOnInit() {
    this.currentCategoryId = 1;
    const offset = 0;
    this.loadCreations(offset, this.currentCategoryId);
    this.loadCategories();
  }

  public toggleCategoryState(category: Category): void {
    for (const c of this.categories){
      c.isActive = false;
    }
    category.isActive = true;
    this.loadCreations(0, category.id);
    this.currentCategoryId = category.id;
  }


  public loadCreations(offset: number, categoryId: number) {
    this.currentCategoryId = categoryId;
    this._creationService.getCreations(offset, this.pageSize, categoryId)
      .then(creations => {
      this.creations = creations;
    }).catch(errorResponse => {
      if (errorResponse.isArray()) {
        this.creations = errorResponse;
      } else {
        console.log(errorResponse);
      }
    });
  }

  public loadCategories() {
    this._categoryService.getAll()
      .then(categories => {
        this.categories = categories;
      }).catch(errorResponse => {
      if (errorResponse.isArray()) {
        this.categories = errorResponse;
      } else {
        console.log(errorResponse);
      }
    });
  }
}
