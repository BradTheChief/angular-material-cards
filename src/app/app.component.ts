import { Component, VERSION } from '@angular/core';
import { User } from './user/user';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  userModel = new User('Brad', 'J', 'Barletta', 'cuse0314@gmail.com',  '5702990690');

}






