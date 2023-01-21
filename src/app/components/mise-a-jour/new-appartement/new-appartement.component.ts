import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appartement } from 'src/models/appartement';
import { Immeuble } from 'src/models/immeuble';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-new-appartement',
  templateUrl: './new-appartement.component.html',
  styleUrls: ['./new-appartement.component.css'],
})
export class NewAppartementComponent implements OnInit {
  appart: any = new Appartement();
  immeuble: Array<Immeuble> = [];
  constructor(private serviceAppart: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.listImmeubles();
  }
  public listImmeubles() {
    this.serviceAppart.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        // console.log(this.immeuble);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public onSaveAppartement() {
    // console.log('---------on method onSaveAppartement-----');
    // console.log(this.appart);
    // console.log(this.immeuble);
    this.serviceAppart.saveAppartement(this.appart).subscribe(
      (data) => {
        alert("confirmation de l'ajout");

        this.router.navigate(['/dashboard/g-appartement']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
