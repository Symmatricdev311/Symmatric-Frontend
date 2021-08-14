import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm : FormGroup;
  constructor(private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
      this.registrationForm = this.formBuilder.group({
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        business_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        repeat_password: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      })
  }

  registerUser(){
    console.log("")
  }
}
