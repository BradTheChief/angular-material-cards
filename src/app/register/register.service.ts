import { RegisterComponent } from './register.component';
import { HttpClient } from '@angular/common/http';

export class RegisterService {
  constructor(private http: HttpClient) { }

  private userUrl = 'https://tgh-newhire-api.azurewebsites.net/api/User';

 

}