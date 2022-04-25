import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})

export class TestComponent {

  users: any;
  constructor(private userData: RegisterService) {
    this.userData.user().subscribe((data) => {
      this.users = data;
    });
  }

  getUserFormData(data: any){
    console.warn(data)
    this.userData.saveUser(data).subscribe((data) => {
      console.warn()
    })
  }


  
  
 }
 
