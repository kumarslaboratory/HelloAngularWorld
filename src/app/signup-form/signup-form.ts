import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css'
})
export class SignupForm {
  signUpForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  }); 

  get userName() {
    return this.signUpForm.get('userName');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSignUpFormSubmit(){
    console.log(this.signUpForm.value);
  }
}
