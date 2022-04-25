import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user'
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  submitted = false;

  userModel = new User('', '', '', '',  '');

  constructor(private _registerService: RegisterService) { }

onSubmit(){
  this.submitted = true;
    this._registerService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error', error))
    
  }
  
  
 }
 
