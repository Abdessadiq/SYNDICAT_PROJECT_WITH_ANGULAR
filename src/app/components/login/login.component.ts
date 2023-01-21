import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { Injectable } from '@angular/core';

import { User } from 'src/models/user';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginservice: LoginService, private router: Router) {}
  user = new User();
  dataUser = new User();

  message!: String;
  public token!: string;

  public static roles: any;
  public isLoginAdmin: boolean = false;
  public isLoginUser: boolean = false;
  public userAuthenticated: any;
  ngOnInit(): void {}

  onSubmit() {
    this.loginservice.login(this.user).subscribe(
      (data) => {
        console.log(data);
        this.user = data as User;
        // console.log('-----Before checked isadmin-----');
        // console.log(this.user.typeUtilisateur);
        // console.log(LoginComponent.roles);
        if (
          this.user.typeUtilisateur == 'SYNDIC_RESIDANT' ||
          this.user.typeUtilisateur == 'SYNDIC_EXTERNE'
        ) {
          LoginComponent.roles = 'ADMIN';
          // console.log('-----After checked is admin-----');
          // console.log(LoginComponent.roles);
          this.isLoginAdmin = true;
          this.isLoginUser = false;
        } else {
          LoginComponent.roles = 'USER';
          this.isLoginAdmin = false;
          this.isLoginUser = true;
        }
        this.token = btoa(
          JSON.stringify({
            email: this.user.email,
            roles: LoginComponent.roles,
          })
        );
        this.userAuthenticated = this.user;
        // console.log('------userAuthenticated after inialised-----');
        // console.log(this.userAuthenticated);
        this.saveLogin();
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        this.message = "Le mot de passe ou l'email est incorrect !?";
      }
    );
  }

  public isAdmin() {
    // console.log('----------in method isAdmin -----------');
    // console.log(LoginComponent.roles);
    // console.log(this.isLoginAdmin);
    // console.log(this.isLoginUser);

    if (this.isLoginAdmin) {
      if (LoginComponent.roles == 'ADMIN') {
        return true;
      }
    }
    return false;
  }

  public isUser() {
    // console.log('----------in method isUser -----------');
    // console.log(LoginComponent.roles);
    // console.log(this.isLoginUser);
    // console.log(this.isLoginAdmin);
    if (this.isLoginUser) {
      if (LoginComponent.roles != 'ADMIN') {
        return true;
      }
    }
    return false;
  }

  public saveLogin() {
    if (this.userAuthenticated) {
      localStorage.setItem('userToken', this.token);
    }
  }

  public loadUserFromLcalStorage() {
    let t = localStorage.getItem('userToken');
    if (t) {
      let user = JSON.parse(atob(t));
      this.userAuthenticated = {
        email: user.email,
        roles: LoginComponent.roles,
      };
      this.isLoginAdmin = true;
      this.isLoginUser = true;
      this.token = t;
    }
  }
  public removeTokenFromLocalStorage() {
    localStorage.removeItem('userToken');
    this.isLoginAdmin = false;
    this.isLoginUser = false;
    this.userAuthenticated = undefined;
  }
}
