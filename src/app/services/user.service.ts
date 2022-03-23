import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

  constructor(private userHttp: HttpClient) { }

  // @desc Post data for login
  userLogin(userData: User): Observable<any> {
    return this.userHttp.post(this.url, userData, { headers: this.headers }).
      pipe(
        retry(1),
        catchError(error => throwError(() => `ERROR: ${error}` ))
      )
  }
}
