import {AfterViewInit, Component, NgZone, OnInit} from '@angular/core';
import {Creation} from '../entites/creation';
import {CreationService} from '../shared/creation.service';
import {Category} from '../entites/category';
import {CategoryService} from '../shared/category.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    private currentCategoryId = null;
    private pageSize = 4;
    public creations: Array<Creation> = [];
    public categories: Array<Category> = [];
    public onScroll;

    constructor(private _creationService: CreationService,
                private _categoryService: CategoryService,
                private zone: NgZone) {
    }

    ngOnInit() {
        this.currentCategoryId = 1;
        const offset = 0;
        this.loadCreations(offset, this.currentCategoryId);
        this.loadCategories();
    }

    ngAfterViewInit() {
        this.onScroll = () => {
            this.scrollHandler(this);
        };
        window.addEventListener('scroll', this.onScroll);
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

    private scrollHandler(self) {
        self.zone.run(() => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                self._creationService.getCreations(self.pageSize, self.creations.length, self.currentCategoryId)
                    .then((response) => {
                        if (response.length) {
                            self.creations = self.creations.concat(response);
                            self.creations = Array.from(new Set(self.creations));
                        }
                    })
                    .catch((error) => console.log(error));
            }
        });
    }
}
