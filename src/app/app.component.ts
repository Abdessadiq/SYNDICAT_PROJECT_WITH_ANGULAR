import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loginCompo: LoginComponent) {}
  ngOnInit(): void {
    // console.log('------in onInit of app componant -----');
    // console.log(LoginComponent.roles);
    this.loginCompo.loadUserFromLcalStorage();
  }
  title = 'syndicat';
  public isloginAdmin() {
    // console.log('-------in mathod app componant');
    // console.log(this.loginCompo.isLoginAdmin);
    // console.log(this.loginCompo.isLoginUser);
    return this.loginCompo.isLoginAdmin;
  }
}
