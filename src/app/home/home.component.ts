import { Component, OnInit } from '@angular/core';
import {Painting} from '../entites/painting';
import {PaintingService} from '../shared/painting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private pageSize = 4;
  public paintings: Array<Painting> = [];
  public categoriesState = [true, false, false];

  constructor(private _paintingService: PaintingService) { }

  ngOnInit() {
    const offset = 0;
    this._paintingService.getPaintings(offset, this.pageSize).then(paintings => {
      this.paintings = paintings;
    }).catch(errorResponse => {
      if (errorResponse.isArray()) {
        this.paintings = errorResponse;
      } else {
        console.log(errorResponse);
      }
    });
  }

  public toggleCategoryState(index: number): void {
    this.categoriesState.fill(false);
    this.categoriesState[index] = true;
  }
}
