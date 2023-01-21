import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Immeuble } from 'src/models/immeuble';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-gestion-immeuble',
  templateUrl: './gestion-immeuble.component.html',
  styleUrls: ['./gestion-immeuble.component.css'],
})
export class GestionImmeubleComponent implements OnInit {
  motCle: String = '';
  curentPage: number = 0;
  size: number = 6;
  pageImmeuble: any;
  pages!: Array<number>;

  constructor(private immeubleService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.doSearch();
  }
  public doSearch() {
    this.immeubleService
      .getImmeubles(this.motCle, this.curentPage, this.size)
      .subscribe(
        (data: any) => {
          this.pageImmeuble = data;
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
    this.router.navigate(['/editImmeuble', id]);
  }
  public onDeleteImmeuble(i: Immeuble) {
    if (confirm('Etes Vous sûre de vouloir Supprimer Cet Immeuble  ?')) {
      this.immeubleService.deleteImmeuble(i.id).subscribe(
        (data) => {
          this.pageImmeuble.content.splice(
            this.pageImmeuble.content.indexOf(i),
            1
          );
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was deleted to the database.');
      this.router.navigate(['dashboard/g-immeuble']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
