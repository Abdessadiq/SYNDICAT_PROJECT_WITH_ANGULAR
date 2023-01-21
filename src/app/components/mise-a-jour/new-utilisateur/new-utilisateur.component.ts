import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appartement } from 'src/models/appartement';
import { Immeuble } from 'src/models/immeuble';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-new-utilisateur',
  templateUrl: './new-utilisateur.component.html',
  styleUrls: ['./new-utilisateur.component.css'],
})
export class NewUtilisateurComponent implements OnInit {
  user: any = new User();
  immeuble: Array<Immeuble> = [];
  appartement: Array<Appartement> = [];
  constructor(private serviceUser: GlobalService, private router: Router) {}

  ngOnInit(): void {
    //console.log('on ngOnInit  new User');
    this.listImmeubles();
    this.listAppartement();
  }
  onSaveUser() {}

  public listImmeubles() {
    this.serviceUser.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        //console.log(this.immeuble);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public listAppartement() {
    this.serviceUser.getListAppartements().subscribe(
      (data: any) => {
        this.appartement = data;
        // console.log(this.appartement);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public onSaveUtilisateur() {
    if (confirm('Etes Vous sûre de vouloir Ajouter cet Utilisateur ?')) {
      this.serviceUser.saveUser(this.user).subscribe(
        (data) => {},
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was saved to the database.');
      this.router.navigate(['/dashboard/g-utilisateur']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
