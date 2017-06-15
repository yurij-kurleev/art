import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards = [0, 1, 2, 3, 4];
  public categoriesState = [true, false, false];

  constructor() { }

  ngOnInit() {
  }

  public toggleCategoryState(index: number): void {
    this.categoriesState.fill(false);
    this.categoriesState[index] = true;
  }
}
