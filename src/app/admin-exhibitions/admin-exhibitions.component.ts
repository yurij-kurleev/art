import {Component, OnInit} from '@angular/core';
import {Exhibition} from '../entites/exhibition';
import {ExhibitionService} from '../shared/exhibition.service';

@Component({
    selector: 'app-admin-exhibitions',
    templateUrl: './admin-exhibitions.component.html',
    styleUrls: ['./admin-exhibitions.component.css']
})
export class AdminExhibitionsComponent implements OnInit {
    public newExhibition = new Exhibition();
    public exhibitions: Exhibition[] = [];
    public fromDate = '';
    public tillDate = '';

    constructor(
        private _exhibitionService: ExhibitionService
    ) {
    }

    ngOnInit() {
        this.getAllExhibitions();
    }

    public onSubmit() {
        this.newExhibition.fromDate = this.convertTimeToTimestamp(this.fromDate);
        this.newExhibition.tillDate = this.convertTimeToTimestamp(this.tillDate);
        this._exhibitionService.addExhibition(this.newExhibition)
            .then((exhibition) => {
                this.exhibitions.unshift(exhibition);
                this.newExhibition = new Exhibition();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public convertTimeToTimestamp (time: string) {
        return + new Date(time) / 1000;
    }

    public isValidForm (): boolean {
        this.newExhibition.fromDate = this.convertTimeToTimestamp(this.fromDate);
        this.newExhibition.tillDate = this.convertTimeToTimestamp(this.tillDate);
        for (let i in this.newExhibition) {
            if (!this.newExhibition[i] && i !== 'idExhibition') {
                return false;
            }
        }
        return true;
    }

    public getAllExhibitions () {
        this._exhibitionService.getAll()
            .then((exhibitions) => {
                this.exhibitions = exhibitions;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public deleteExhibition (exhibition: Exhibition) {
        const decision = confirm('Are you sure?');
        if (decision) {
            this._exhibitionService.deleteExhibition(exhibition.idExhibition)
                .then((response) => {
                    const index = this.exhibitions.indexOf(exhibition);
                    this.exhibitions.splice(index, 1);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
