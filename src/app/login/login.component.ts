import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/interface/login';
@Component({
  selector: 'symmatric-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  formData : Login;
  loginForm : FormGroup;
  invalidName: string = '';
	invalidPass: string = '';
  submitted: boolean = false;
  passwordField: string = 'password';
  constructor(private formBuilder : FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.formData = new Login;
		this.buildForm();
  }

  /**
   * Create login form and validates the data.
   */
  buildForm(){
      this.loginForm = this.formBuilder.group({
          login_email : this.formBuilder.control(null,Validators.compose([
              Validators.required,
              Validators.email
          ])),
          login_password : ['',Validators.required,Validators.minLength(6)]
      })
  }

  loginUser(){

  }

  get lFrm(){
      return this.loginForm.controls;
  }

  /**
	 * Used to set email value and redirect to forgot password
	   */
	forgotPassword(): void {
		// if (this.loginForm.controls.login_email.valid) {
		// 	this.sharedService.saveEmailData(this.loginForm.controls.login_email.value);
		// } else {
		// 	this.sharedService.saveEmailData('');
		// }
		this.router.navigate(["forgot-password"]);
	}
}
