import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Route } from '@angular/router';
import { Caisse } from 'src/models/caisse';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-gestion-caisse',
  templateUrl: './gestion-caisse.component.html',
  styleUrls: ['./gestion-caisse.component.css'],
})
export class GestionCaisseComponent implements OnInit {
  caisse: any = new Caisse();

  constructor(private caisseService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.caisseService.getListCaisses().subscribe(
      (data: any) => {
        console.log(data);
        this.caisse = data as Caisse;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public toEdit(id: number) {
    this.router.navigate(['/editCaisse', id]);
  }

  public onDeleteCaisse(c: Caisse) {
    if (confirm('Etes Vous sûre de vouloir Supprimer Cette Caisse  ?')) {
      this.caisseService.deleteCaisse(c.id).subscribe(
        (data) => {
          this.caisse.splice(this.caisse.indexOf(c), 1);
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was deleted to the database.');
      // this.router.navigate(['dashboard/g-appartement']);
    } else {
      // Do nothing!
      console.log('Thing was not deleted to the database.');
    }
  }
}
