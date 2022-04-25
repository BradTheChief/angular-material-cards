import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Test } from './test';
import { User } from '../user/user'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})

export class TestComponent {

  formData = [];
  title = "UserForm";


  userModel = new User('', '', '', '',  '');

onSubmit(){
  console.log(this.userModel);
}

 }