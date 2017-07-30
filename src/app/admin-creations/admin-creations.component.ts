import { Component, OnInit } from '@angular/core';
import {Category} from '../entites/category';
import {Creation} from '../entites/creation';
import {CreationService} from '../shared/creation.service';
import {CategoryService} from '../shared/category.service';

@Component({
  selector: 'app-admin-creations',
  templateUrl: './admin-creations.component.html',
  styleUrls: ['./admin-creations.component.css']
})
export class AdminCreationsComponent implements OnInit {

  public newCreation = new Creation();
  public categories: Category[] = [];
  public creations: Creation[] = [];


  constructor(
    private _creationService: CreationService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getAllExhibitions();
    this.getCategories();
  }

  public onSubmit() {
    this._creationService.addCreation(this.newCreation)
      .then((creation) => {
        this.creations.unshift(creation);
        this.newCreation = new Creation();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public isValidForm (): boolean {
    for (const i in this.newCreation) {
      if (!this.newCreation[i] && i !== 'id') {
        return false;
      }
    }
    return true;
  }

  public getAllExhibitions () {
    this._creationService.getAll()
      .then((creations) => {
        this.creations = creations;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public deleteCreation (creation: Creation) {
    const decision = confirm('Are you sure?');
    if (decision) {
      this._creationService.deleteCreation(creation.id)
        .then((response) => {
          const index = this.creations.indexOf(creation);
          this.creations.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  private getCategories() {
    this._categoryService.getAll()
      .then((creations) => {
        this.categories = creations;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
