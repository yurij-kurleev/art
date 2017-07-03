import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Creation} from '../entites/creation';
import {CreationService} from '../shared/creation.service';
import {Category} from '../entites/category';
import {CategoryService} from '../shared/category.service';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {LocaleUtil} from '../shared/locale.util';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends LocaleUtil
  implements OnInit, AfterViewInit, OnDestroy {

    private currentCategoryId = null;
    private pageSize = 4;
    public creations: Array<Creation> = [];
    public categories: Array<Category> = [];
    private onScrollSubscription;

    constructor(cookieService: CookieService,
                private _creationService: CreationService,
                private _categoryService: CategoryService) {
      super(cookieService);
    }

    ngOnInit() {
        this.currentCategoryId = 1;
        const offset = 0;
        this.loadCreations(offset, this.currentCategoryId);
        this.loadCategories();
    }

    ngAfterViewInit() {
      this.onScrollSubscription = Observable.fromEvent(window, 'scroll')
        .throttleTime(200)
        .subscribe(() => {
          this.scrollHandler();
        });
    }


  ngOnDestroy(): void {
      this.onScrollSubscription.unsubscribe();
  }

  public toggleCategoryState(category: Category): void {
        for (const c of this.categories) {
            c.isActive = false;
        }
        category.isActive = true;
        this.loadCreations(0, category.id);
        this.currentCategoryId = category.id;
    }


    public loadCreations(offset: number, categoryId: number) {
        this.currentCategoryId = categoryId;
        this._creationService.getCreations(this.pageSize, offset, categoryId)
            .then(creations => {
                this.creations = creations;
            })
            .catch(errorResponse => {
                if (Array.isArray(errorResponse)) {
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
                this.categories[0].isActive = true;
            }).catch(errorResponse => {
            if (errorResponse.isArray()) {
                this.categories = errorResponse;
            } else {
                console.log(errorResponse);
            }
        });
    }

    private scrollHandler() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this._creationService
          .getCreations(this.pageSize, this.creations.length, this.currentCategoryId)
          .then((response) => {
            if (response.length) {
              this.creations = this.creations.concat(response);
            }
          })
          .catch((error) => console.log(error));
      }
    }
}
