import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, RegisterComponent, UserComponent, TestComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }





