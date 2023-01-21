import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Immeuble } from 'src/models/immeuble';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-edit-immeuble',
  templateUrl: './edit-immeuble.component.html',
  styleUrls: ['./edit-immeuble.component.css'],
})
export class EditImmeubleComponent implements OnInit {
  mode = 1;
  immeuble: Immeuble = new Immeuble();
  idImmeuble!: number;

  constructor(
    public activaetRoute: ActivatedRoute,
    public immeubleService: GlobalService,
    public router: Router
  ) {
    this.idImmeuble = activaetRoute.snapshot.params['id'];
    //console.log(this.idImmeuble);
  }

  ngOnInit(): void {
    this.immeubleService.getImmeuble(this.idImmeuble).subscribe(
      (data: any) => {
        this.immeuble = data as Immeuble;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public onEditImmeuble() {
    if (confirm('Etes Vous sûre de vouloir Effectuer cette modification ?')) {
      this.immeubleService.updateImmeuble(this.immeuble).subscribe(
        (data) => {
          //console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('Thing was saved to the database.');
      this.router.navigate(['dashboard/g-immeuble']);
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
