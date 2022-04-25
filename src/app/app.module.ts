import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { User } from './user/user';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  declarations: [ AppComponent, RegisterComponent, UserComponent],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }





