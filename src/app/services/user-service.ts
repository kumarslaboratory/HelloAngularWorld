import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {
  constructor(_http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/users', _http);
    //console.log('Users Service Constructor Called');
  }
}
