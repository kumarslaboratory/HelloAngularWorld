import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root'
})
export class CommentService  extends DataService {
  constructor(_http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/comments', _http);
    //console.log('Comment Service Constructor Called');
  }
}
