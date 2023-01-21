import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caisse } from 'src/models/caisse';
import { Immeuble } from 'src/models/immeuble';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-new-caisse',
  templateUrl: './new-caisse.component.html',
  styleUrls: ['./new-caisse.component.css'],
})
export class NewCaisseComponent implements OnInit {
  caisse: any = new Caisse();
  immeuble: Array<Immeuble> = [];
  user: Array<User> = [];

  constructor(private serviceCaisse: GlobalService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.immeuble);
    this.listImmeubles();
    this.listUsers();
  }

  public onSaveCaisse() {
    if (confirm('Etes vous sûre de vouloir Ajouter Cette caisse')) {
      this.serviceCaisse.saveCaisse(this.caisse).subscribe(
        (data) => {
          this.router.navigate(['/dashboard/g-caisse']);
          console.log('somthings is saved in database');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('somthings is not saved in database');
    }
  }

  public listImmeubles() {
    this.serviceCaisse.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        console.log(this.immeuble);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public listUsers() {
    this.serviceCaisse.getListUtilisateurs().subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
