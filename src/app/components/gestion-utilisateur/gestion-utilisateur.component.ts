import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css'],
})
export class GestionUtilisateurComponent implements OnInit {
  motCle: String = '';
  curentPage: number = 0;
  size: number = 5;
  pageUser: any;
  pages!: Array<number>;
  constructor(private userService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.doSearch();
  }

  public doSearch() {
    this.userService
      .getUtilisateurs(this.motCle, this.curentPage, this.size)
      .subscribe(
        (data: any) => {
          this.pageUser = data;
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
    this.router.navigate(['/editUtilisateur', id]);
  }

  public onDeleteUtilisateur(user: User) {
    if (confirm('Etes Vous sûr de vouloir Supprimer Cet Utilisateur  ?')) {
      this.userService.deleteUser(user.id).subscribe(
        (data) => {
          this.pageUser.content.splice(this.pageUser.content.indexOf(user), 1);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was deleted to the database.');
      this.router.navigate(['dashboard/g-utilisateur']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
