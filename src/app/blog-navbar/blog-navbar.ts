import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-blog-navbar',
  imports: [ RouterLink, RouterLinkActive, RouterModule ],
  templateUrl: './blog-navbar.html',
  styleUrl: './blog-navbar.css'
})
export class BlogNavbar {
  constructor(private _authService : AuthService, private _router: Router){
  }

  onLogOut() : void{
    this._authService.logout();
    this._router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }

  isAdmin(): boolean {
    console.log("isAdmin: " + this._authService.isAdmin);
    return this._authService.isAdmin;
  }
}
