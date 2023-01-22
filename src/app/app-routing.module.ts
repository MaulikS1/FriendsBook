import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NetworkComponent } from './components/network/network.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component:  AboutComponent},
  { path: '', component: WelcomeComponent },
  { path: 'auth/home', component: HomeComponent },
  { path: 'auth/network', component: NetworkComponent },
  { path: 'auth/settings', component: SettingsComponent },
  { path: 'auth/friends', component: FriendsComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
