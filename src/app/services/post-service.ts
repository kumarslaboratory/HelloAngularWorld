import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(_http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', _http);
    //console.log('Post Service Constructor Called');
  }
}