import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class AbstractService {

  protected baseUrl = 'http://art-backend/server/';
  public isCorrectUrl = true;

  constructor(protected httpService: HttpService) { }

}
