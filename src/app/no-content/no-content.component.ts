import {Component, OnInit} from '@angular/core';
import {AbstractService} from '../shared/abstract.service';

@Component({
    selector: 'app-no-content',
    templateUrl: './no-content.component.html',
    styleUrls: ['./no-content.component.css']
})
export class NoContentComponent implements OnInit {

    constructor(public abstractService: AbstractService) {
    }

    ngOnInit() {
        setTimeout(() => this.abstractService.isCorrectUrl = false);
    }
}
