import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/models/annonce';
import { Immeuble } from 'src/models/immeuble';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css'],
})
export class EditAnnonceComponent implements OnInit {
  annonce: any = new Annonce();
  user: Array<User> = [];
  immeuble: Array<Immeuble> = [];
  idAnnonce!: number;
  constructor(
    private serviceAnnonce: GlobalService,
    private route: Router,
    public activaetRoute: ActivatedRoute
  ) {
    this.idAnnonce = activaetRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.serviceAnnonce.getAnnonce(this.idAnnonce).subscribe(
      (data: any) => {
        this.annonce = data as Annonce;
      },
      (err) => {
        console.log(err);
      }
    );

    this.listImmeubles();
    this.listUsers();
  }

  public onUpdateAnnonce() {
    if (confirm('Etes vous sûre de vouloir Effectuer cette mofication')) {
      this.serviceAnnonce.updateAnnonce(this.annonce).subscribe(
        (data) => {
          // sole.log(data);
          // this.route.navigate(['/dashboard/g-annonce']);
          console.log('something is update in database');
          this.route.navigate(['/dashboard/g-annonce']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('something is not update in database');
    }
  }

  public listImmeubles() {
    this.serviceAnnonce.getListImmeubles().subscribe(
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
    this.serviceAnnonce.getListUtilisateurs().subscribe(
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
