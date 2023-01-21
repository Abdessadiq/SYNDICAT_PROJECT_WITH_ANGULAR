import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Immeuble } from 'src/models/immeuble';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-new-immeuble',
  templateUrl: './new-immeuble.component.html',
  styleUrls: ['./new-immeuble.component.css'],
})
export class NewImmeubleComponent implements OnInit {
  immeuble = new Immeuble();
  mode = 1;

  constructor(private immeubleService: GlobalService, private route: Router) {}

  ngOnInit(): void {}
  onSaveImmeuble() {
    if (confirm('Etes vous sûre de vouloir ajouter cet Immeuble')) {
      this.immeubleService.saveImmeuble(this.immeuble).subscribe(
        (data) => {
          // console.log(data);
          console.log('Thing was update to the database.');
          this.route.navigate(['dashboard/g-immeuble']);
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
  public onUpdateImmeuble() {
    //console.log('on method onUpdateImmeuble');
  }
}
