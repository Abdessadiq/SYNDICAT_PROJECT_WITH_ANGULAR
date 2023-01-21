import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reglement } from 'src/models/reglement';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-gestion-reglement',
  templateUrl: './gestion-reglement.component.html',
  styleUrls: ['./gestion-reglement.component.css'],
})
export class GestionReglementComponent implements OnInit {
  constructor(
    private reglementService: GlobalService,
    private router: Router
  ) {}

  motCle: String = '';
  curentPage: number = 0;
  size: number = 6;
  pageReglement: any;
  pages!: Array<number>;

  ngOnInit(): void {
    this.doSearch();
  }

  public doSearch() {
    this.reglementService
      .getReglements(this.motCle, this.curentPage, this.size)
      .subscribe(
        (data: any) => {
          this.pageReglement = data;
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
    this.router.navigate(['/editReglement', id]);
  }

  public onDeleteReglement(reg: Reglement) {
    if (confirm('Etes vous sûre de vouloir supprimer ce Réglement !?')) {
      this.reglementService.deleteReglement(reg.id).subscribe(
        (data) => {
          console.log(data);

          this.pageReglement.content.splice(
            this.pageReglement.content.indexOf(reg)
          );
          console.log('somethings is daleted in database');
          this.router.navigate(['/dashboard/g-reglement']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
