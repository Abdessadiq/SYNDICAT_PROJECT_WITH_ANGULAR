import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caisse } from 'src/models/caisse';
import { Immeuble } from 'src/models/immeuble';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-edit-caisse',
  templateUrl: './edit-caisse.component.html',
  styleUrls: ['./edit-caisse.component.css'],
})
export class EditCaisseComponent implements OnInit {
  caisse: any = new Caisse();
  immeuble: Array<Immeuble> = [];
  user: Array<User> = [];
  idCaisse!: number;

  constructor(
    public activaetRoute: ActivatedRoute,
    private serviceCaisse: GlobalService,
    private router: Router
  ) {
    this.idCaisse = activaetRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.listImmeubles();
    this.listUsers();

    this.serviceCaisse.getCaisse(this.idCaisse).subscribe(
      (data: any) => {
        this.caisse = data as Caisse;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public onUpdateCaisse() {
    if (confirm('Etes Vous sûre de vouloir Effectuer cette modification ?')) {
      this.serviceCaisse.updateCaisse(this.caisse).subscribe(
        (data) => {
          // console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was saved to the database.');
      this.router.navigate(['dashboard/g-caisse']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }

  public listImmeubles() {
    this.serviceCaisse.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        //console.log(this.immeuble);
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
        //console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
