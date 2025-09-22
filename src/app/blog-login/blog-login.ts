import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './blog-login.html',
  styleUrl: './blog-login.css'
})
export class BlogLogin {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email, Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ]),
  });

  isValidLogin : boolean = false;
  hasLoginError : boolean = false;

  constructor(private _authService : AuthService, private _router: Router){
  }

  get email() {
    return this.loginForm.get('email');
  } 

  get password() {
    return this.loginForm.get('password');
  }

  onLogInFormSubmit(){
    let result = this._authService.login(this.loginForm.value as { email: string; password: string });
    if(result){
      this.isValidLogin = true;
      this._router.navigate(['/']);
    }
    else{
      this.hasLoginError = true;
    }
  }

}
