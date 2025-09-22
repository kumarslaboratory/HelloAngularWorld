import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-blog-users',
  imports: [],
  templateUrl: './blog-users.html',
  styleUrl: './blog-users.css'
})
export class BlogUsers implements OnInit {
  protected users : any[] = [];
  constructor(private _userService : UserService) { 
  }

  ngOnInit(): void {
    this._userService.getAll()
    .subscribe({ next: (response) => this.users = response } );
  }
}