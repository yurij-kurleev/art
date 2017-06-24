import { Injectable } from '@angular/core';
import {Painting} from '../entites/painting';
import {AbstractService} from './abstract.service';

@Injectable()
export class PaintingService extends AbstractService {

  public getPaintings(limit: number, offset: number,
                      categoryId: number): Promise<Painting[]> {

    return null;
  }
}
