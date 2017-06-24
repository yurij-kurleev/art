import { Component, OnInit } from '@angular/core';
import {ExhibitionService} from '../shared/exhibition.service';
import {Exhibition} from '../entites/exhibition';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})
export class ExhibitionsComponent implements OnInit {
  public exhibitions: Exhibition[];

  constructor(private _exhibitionService: ExhibitionService) { }

  ngOnInit() {
    this._exhibitionService.getAll()
        .then((exhibitions) => {
            this.exhibitions = exhibitions;
        })
        .catch((error) => {
            console.log(error);
        });
  }

}
