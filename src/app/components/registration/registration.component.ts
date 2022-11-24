import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserRegistrationFormData } from 'src/app/Models/register.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { MustMatch } from 'src/app/shared/password-match';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public registrationUserDetails: IUserRegistrationFormData;
  public isUserFormSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private formService: AuthenticateService,
    private router: Router
  ) {
    this.registrationForm = {} as FormGroup;
    this.registrationUserDetails = {} as IUserRegistrationFormData;
    this.isUserFormSubmitted = false;
  }

  ngOnInit(): void {
    this.initializeUserForm();
  }

  public initializeUserForm(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpassword: ['', [Validators.required]],
        orders: [[]],
        address: [
          {
            houseno: '',
            city: '',
            state: '',
            landmark: '',
          },
        ],
      },
      {
        validator: MustMatch('password', 'confirmpassword'),
      }
    );
  }

  get userFormControls() {
    return this.registrationForm.controls;
  }

  public onSubmit(): void {
    this.isUserFormSubmitted = true;
    this.registrationUserDetails = this.registrationForm.getRawValue();
    this.formService.register(this.registrationUserDetails).subscribe((val) => {});
    console.log("From Value ==>", this.registrationForm.value);
    alert('User Registration Successful.');
    this.router.navigateByUrl('/login');
  }
}
