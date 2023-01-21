import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reglement } from 'src/models/reglement';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-edit-reglement',
  templateUrl: './edit-reglement.component.html',
  styleUrls: ['./edit-reglement.component.css'],
})
export class EditReglementComponent implements OnInit {
  reglement: any = new Reglement();
  idReglement!: number;
  constructor(
    private serviceReglement: GlobalService,
    private route: Router,
    public activaetRoute: ActivatedRoute
  ) {
    this.idReglement = activaetRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.serviceReglement.getReglement(this.idReglement).subscribe(
      (data: any) => {
        this.reglement = data as Reglement;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public onUpdateReglement() {
    if (confirm('etes vous sûre de vouloir Modifier ce Réglement !?')) {
      this.serviceReglement.updateReglement(this.reglement).subscribe(
        (data) => {
        //  console.log(data);
          console.log('somethings is saved in data base');
          this.route.navigate(['/dashboard/g-reglement']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('somethings is not saved in database');
    }
  }
}
