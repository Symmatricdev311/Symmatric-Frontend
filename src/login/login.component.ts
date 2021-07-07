import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/interface/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  formData : Login;
  loginForm : FormGroup;
  invalidName: string = '';
	invalidPass: string = '';
  submitted: boolean = false;
  passwordField: string = 'password';
  constructor(private formBuilder : FormBuilder) { }

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
}
