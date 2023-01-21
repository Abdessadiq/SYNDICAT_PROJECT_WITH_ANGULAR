import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  disableSelect = new FormControl(false);
  user: any = new User();

  msg!: String;
  constructor(private registerService: LoginService, private route: Router) {}

  ngOnInit(): void {}
  public onRegister() {
    console.log('-----------------------------');

    console.log(this.user);
    this.registerService.register(this.user).subscribe(
      (data) => {
        console.log(data);
        console.log("l'iscriptiona été effectuer avec succées !!");
        this.route.navigate(['/login']);
      },
      (err) => {
        console.log(err);
        this.msg = 'Ce compte existe Déjà Dans Notre système';
      }
    );
  }
}
