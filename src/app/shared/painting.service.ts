import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Painting} from '../entites/painting';

@Injectable()
export class PaintingService {

  constructor(private _httpService: HttpService) { }

  public getPaintings(): Promise<Painting[]> {

    return null;
  }
}
