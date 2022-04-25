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
  userModel = new User('Brad', 'J', 'Barletta', 'cuse0314@gmail.com',  '5702990690');
 }