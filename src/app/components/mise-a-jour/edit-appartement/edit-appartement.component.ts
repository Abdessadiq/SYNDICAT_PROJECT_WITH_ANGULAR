import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appartement } from 'src/models/appartement';
import { Immeuble } from 'src/models/immeuble';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-edit-appartement',
  templateUrl: './edit-appartement.component.html',
  styleUrls: ['./edit-appartement.component.css'],
})
export class EditAppartementComponent implements OnInit {
  appart: any = new Appartement();
  //Le tableau pour mettre la liste des immeubles --->
  immeuble: Array<Immeuble> = [];
  idAppartement!: number;

  constructor(
    public activaetRoute: ActivatedRoute,
    public serviceAppart: GlobalService,
    public router: Router
  ) {
    this.idAppartement = activaetRoute.snapshot.params['id'];
    //console.log(this.idAppartement);
  }

  ngOnInit(): void {
    this.serviceAppart.getAppartement(this.idAppartement).subscribe(
      (data: any) => {
        this.appart = data as Appartement;
      },
      (err) => {
        console.log(err);
      }
    );
    this.listImmeubles();
  }

  public listImmeubles() {
    this.serviceAppart.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        //console.log(this.immeuble);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onEditAppartement() {
    if (confirm('Etes Vous sûre de vouloir Effectuer cette modification ?')) {
      this.serviceAppart.updateAppartement(this.appart).subscribe(
        (data) => {
          //console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was saved to the database.');
      this.router.navigate(['dashboard/g-appartement']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
