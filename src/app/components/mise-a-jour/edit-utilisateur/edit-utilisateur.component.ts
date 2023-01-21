import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appartement } from 'src/models/appartement';
import { Immeuble } from 'src/models/immeuble';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css'],
})
export class EditUtilisateurComponent implements OnInit {
  //----------------------
  user: any = new User();
  immeuble: Array<Immeuble> = [];
  appartement: Array<Appartement> = [];
  idUser: number;

  constructor(
    public activaetRoute: ActivatedRoute,
    public serviceUser: GlobalService,
    public router: Router
  ) {
    this.idUser = activaetRoute.snapshot.params['id'];
    // console.log(this.idUser);
  }

  ngOnInit(): void {
    this.serviceUser.getUtilisateur(this.idUser).subscribe(
      (data: any) => {
        this.user = data as User;
      },
      (err) => {
        console.log(err);
      }
    );

    this.listAppartement();
    this.listImmeubles();
  }

  public listImmeubles() {
    this.serviceUser.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        // console.log(this.immeuble);
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

  public onEditUtilisateur() {
    if (confirm('Etes Vous sûre de vouloir Effectuer cette modification ?')) {
      this.serviceUser.updateUser(this.user).subscribe(
        (data) => {
          //console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was EDIT to the database.');
      this.router.navigate(['dashboard/g-utilisateur']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
