import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //public url = 'http://localhost:4200';

  login(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/login', user);
  }

  public register(u: User): Observable<any> {
    console.log('On method Register in Services');
    return this.http.post<any>('http://localhost:8080/register', u);
  }
}
