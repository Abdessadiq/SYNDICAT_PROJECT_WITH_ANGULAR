import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/models/annonce';
import { Immeuble } from 'src/models/immeuble';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-new-annonce',
  templateUrl: './new-annonce.component.html',
  styleUrls: ['./new-annonce.component.css'],
})
export class NewAnnonceComponent implements OnInit {
  annonce: any = new Annonce();
  immeuble: Array<Immeuble> = [];
  user: Array<User> = [];

  constructor(private serviceAnnonce: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.listImmeubles();
    this.listUsers();
  }
  public onSaveAnnonce() {
    if (confirm('Etes vous sûre de vouloir Ajouter Cette Annonce')) {
      this.serviceAnnonce.saveAnnonce(this.annonce).subscribe(
        (data) => {
          this.router.navigate(['/dashboard/g-annonce']);
          console.log('somthing is saved in database');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('somthing is not saved in database');
    }
  }

  public listImmeubles() {
    this.serviceAnnonce.getListImmeubles().subscribe(
      (data: any) => {
        this.immeuble = data;
        console.log('---------------On Method List Immeuble');
        console.log(this.immeuble);
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
        console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
