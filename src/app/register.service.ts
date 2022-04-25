import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  url = '';
  constructor(private http: HttpClient) { }
  user() {
    return this.http.get(this.url);
  }

  saveUser(data: any) {
    return this.http.post<any>(this.url, data);
  }
}