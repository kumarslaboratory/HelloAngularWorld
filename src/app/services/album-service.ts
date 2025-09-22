import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends DataService {
  constructor(_http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/albums', _http);
    //console.log('Albums Service Constructor Called');
  }
}
