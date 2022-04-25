import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {

  userModel = new User('', '', '', '',  '');

onSubmit(){
  console.log(this.userModel);
  if (this.userModel){
    console.log("Form Submitted");
    
  }
  
  
 }
 
}