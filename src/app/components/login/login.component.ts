import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isUserFormSubmitted: boolean;
  public loginDetails: IUserData;

  constructor(
    private formBuilder: FormBuilder,
    //private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = {} as FormGroup;
    this.isUserFormSubmitted = false;
    this.loginDetails = {} as IUserData;
  }

  ngOnInit(): void {
    this.initializeUserForm();
    window.scroll(0, 0);
  }

  public initializeUserForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get userFormControls() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    this.isUserFormSubmitted = true;
    this.isUserFormSubmitted = true;
    this.loginDetails = this.loginForm.getRawValue();
    // this.authService
    //   .login(this.loginDetails.username, this.loginDetails.password)
    //   .subscribe((res: IUserData[]) => {
    //     if (res.length == 0) {
    //       alert('Invalid Username and Password');
    //     } else {
    //       this.authService.setCurrentUser(res);
    //       alert('login Successfull');
    //       this.router.navigateByUrl('/home');
    //     }
    //   });
  }
}
