import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, UserComponent],
  declarations: [ AppComponent, RegisterComponent, UserComponent, TestComponent],
  bootstrap:    [ AppComponent ],
  exports:       [UserComponent]
})
export class AppModule { }





