import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  })

export class RegisterComponent implements OnInit { 

  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    middleInitial: new FormControl(null, [Validators.maxLength(1)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    email: new FormControl(null, [Validators.maxLength(255)]),
    phone: new FormControl(null, [Validators.maxLength(255)])

  });

  constructor() { }

  ngOnInit(): void {

  }

}