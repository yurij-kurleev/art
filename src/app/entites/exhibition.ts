export interface IExhibition {
    idExhibition: number;
    title: string;
    place: string;
    fromDate: number;
    tillDate: number;
}

export class Exhibition implements IExhibition {
    idExhibition: number;
    title: string;
    place: string;
    fromDate: number;
    tillDate: number;

    constructor(idExhibition?: number, title?: string, place?: string,
                fromDate?: number, tillDate?: number) {
        this.idExhibition = idExhibition || 0;
        this.title = title || '';
        this.place = place || '';
        this.fromDate = fromDate || 0;
        this.tillDate = tillDate || 0;
    }
}
