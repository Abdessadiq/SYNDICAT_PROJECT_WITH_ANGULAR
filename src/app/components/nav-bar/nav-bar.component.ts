import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isMenuOpen = false;

  constructor(private route: Router, public loginCompo: LoginComponent) {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout() {
    if (
      this.loginCompo.userAuthenticated &&
      this.loginCompo.isLoginAdmin &&
      this.loginCompo.isLoginUser
    ) {
      this.loginCompo.removeTokenFromLocalStorage();
      this.route.navigate(['/login']);
    }
  }
  isAdmin() {
    return this.loginCompo.isAdmin();
  }
  isUser() {
    return this.loginCompo.isUser();
  }
}
