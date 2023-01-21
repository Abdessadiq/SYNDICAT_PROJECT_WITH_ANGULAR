import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reglement } from 'src/models/reglement';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-new-reglement',
  templateUrl: './new-reglement.component.html',
  styleUrls: ['./new-reglement.component.css'],
})
export class NewReglementComponent implements OnInit {
  reglement: any = new Reglement();

  constructor(private serviceReglement: GlobalService, private route: Router) {}

  ngOnInit(): void {}
  public onSaveReglement() {
    if (confirm('Etes vous sûre de vouloir ajouter ce Réglement')) {
      this.serviceReglement.saveReglement(this.reglement).subscribe(
        (data) => {
          console.log(data);
          console.log('Thing was update to the database.');
          this.route.navigate(['dashboard/g-reglement']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
}
