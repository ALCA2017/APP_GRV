import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    LoginPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage,
    HomePage
  ]
})
export class LoginPageModule {}
