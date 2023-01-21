import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appartement } from 'src/models/appartement';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-gestion-appartement',
  templateUrl: './gestion-appartement.component.html',
  styleUrls: ['./gestion-appartement.component.css'],
})
export class GestionAppartementComponent implements OnInit {
  constructor(
    private appartementService: GlobalService,
    private router: Router
  ) {}
  appart: any = new Appartement();
  ngOnInit(): void {
    this.getAppartement();
  }
  public getAppartement() {
    this.appartementService.getListAppartements().subscribe(
      (data: any) => {
        this.appart = data as Appartement;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public toEdit(id: number) {
    this.router.navigate(['/editAppartement', id]);
  }

  public onDeleteApaprtement(app: Appartement) {
    if (confirm('Etes Vous sûre de vouloir Supprimer Cet Appartement  ?')) {
      this.appartementService.deleteAppartement(app.id).subscribe(
        (data) => {
          this.appart.splice(this.appart.indexOf(app), 1);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was deleted to the database.');
      //this.router.navigate(['dashboard/g-appartement']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
