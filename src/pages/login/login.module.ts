import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {  HeaderPageModule } from '../header/header.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    HeaderPageModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
