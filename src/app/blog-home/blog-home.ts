import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-blog-home',
  imports: [],
  templateUrl: './blog-home.html',
  styleUrl: './blog-home.css'
})
export class BlogHome {
  constructor(protected _authService : AuthService){
  }
}
