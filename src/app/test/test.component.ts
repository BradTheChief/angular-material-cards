import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})

export class TestComponent {

  userModel = new User('', '', '', '',  '');

onSubmit(){
  console.log(this.userModel);
  if (this.userModel){
    console.log("Form Submitted");
    
  }
  
  
 }
 
}