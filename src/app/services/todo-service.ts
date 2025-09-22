import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends DataService {
  constructor(_http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/todos', _http);
    //console.log('Todo Service Constructor Called');
  }
}
