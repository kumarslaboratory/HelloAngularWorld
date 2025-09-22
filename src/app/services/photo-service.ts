import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends DataService {
  constructor(_http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/photos', _http);
    //console.log('Photo Service Constructor Called');
  }
}
