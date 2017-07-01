import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class AbstractService {

  protected baseUrl = 'http://art-backend/server/';

  constructor(protected httpService: HttpService) { }

}
