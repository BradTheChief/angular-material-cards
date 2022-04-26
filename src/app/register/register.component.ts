import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user';
import { RegisterService } from '../register.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  json;
  submitted = false;

  userModel = new User('', '', '', '', '');

  constructor(private http: HttpClient) {}

  onSubmit(data) {
    this.http
      .post('https://tgh-newhire-api.azurewebsites.net/api/User', data)
      .subscribe((result) => {
        console.warn('result', result);
      });
  }
}
