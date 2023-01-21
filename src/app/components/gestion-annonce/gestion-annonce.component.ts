import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/models/annonce';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-gestion-annonce',
  templateUrl: './gestion-annonce.component.html',
  styleUrls: ['./gestion-annonce.component.css'],
})
export class GestionAnnonceComponent implements OnInit {
  constructor(private annonceService: GlobalService, public router: Router) {}
  motCle: String = '';
  curentPage: number = 0;
  size: number = 4;
  pageAnnonce: any;
  pages!: Array<number>;

  ngOnInit(): void {
    this.doSearch();
  }

  public doSearch() {
    this.annonceService
      .getAnnonces(this.motCle, this.curentPage, this.size)
      .subscribe(
        (data: any) => {
          this.pageAnnonce = data;
          this.pages = new Array(data.totalPages);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public search() {
    //this.curentPage = 0;
    this.doSearch();
    // this.curentPage = this.pages;
  }
  

  public goToPage(i: number) {
    this.curentPage = i;
    this.doSearch();
  }

  public toEdit(id: number) {
    this.router.navigate(['/editAnnonce', id]);
  }

  public onDeleteAnnonce(annonce: Annonce) {
    if (confirm('Etes vous sûre de vouloir supprimer cette Annonce !?')) {
      this.annonceService.deleteAnnonce(annonce.id).subscribe(
        (data) => {
         // console.log(data);

          this.pageAnnonce.content.splice(
            this.pageAnnonce.content.indexOf(annonce)
          );
          console.log('somethings is daleted in database');
          this.router.navigate(['/dashboard/g-annonce']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
