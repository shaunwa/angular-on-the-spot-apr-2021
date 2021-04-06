import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private http: HttpClient,
  ) { }

  loadUserData(): Observable<any> {
      return this.http.get('https://randomuser.me/api/');
  }
}
