import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserRegistrationFormData } from '../Models/register.model';
import { baseUrl } from 'src/environments/environment.prod';
import { IUserData } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  public register(
    formData: IUserRegistrationFormData
  ): Observable<IUserRegistrationFormData[]> {
    return this.http.post<IUserRegistrationFormData[]>(
      `${baseUrl}users/register`,
      formData
    );
  }

  public login(formData: IUserData): Observable<IUserData[]> {
    return this.http.post<IUserData[]>(
      `${baseUrl}users/authenticate`,
      formData
    );
  }
}
