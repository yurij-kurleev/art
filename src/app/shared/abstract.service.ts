import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class AbstractService {

  protected baseUrl = 'http://art-backend/server/exhibition/';

  constructor(protected httpService: HttpService) { }

}
