import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})
export class ExhibitionsComponent implements OnInit {
  public exhibitions = ['exhibition 1', 'exhibition 2', 'exhibition 3', 'exhibition 4',
    'exhibition 5'];

  constructor() { }

  ngOnInit() {
  }

}
