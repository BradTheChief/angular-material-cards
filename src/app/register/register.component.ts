import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user';
import { RegisterService } from '../register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  submitted = false;

  userModel = new User('', '', '', '', '');

  onSubmit(data) {
    this.http
      .post('https://tgh-newhire-api.azurewebsites.net/api/User', data)
      .subscribe((data) => {
        console.warn('data', data);
      });
  }
}
