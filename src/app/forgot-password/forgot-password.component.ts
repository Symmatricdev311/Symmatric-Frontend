import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from 'src/app/shared/interface/forgot-password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'symmatric-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  formData: ForgotPassword;
	forgetPasswordError: string = '';
	isSubmitted: boolean = false;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formData = new ForgotPassword;
    this.buildForm();
  }

  /**
	 * Validates and build form
	 */
	buildForm(): void {
		this.forgetForm = this.formBuilder.group({
			reminder_email: this.formBuilder.control(null,
				Validators.compose([
					Validators.required,
					Validators.email,
					Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
				])
			),
		});
	}

  /**
	 * Submit forget password form, if valid 
	 */
	onForgetPassword(): void {
	}
}
