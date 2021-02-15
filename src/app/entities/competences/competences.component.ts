import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  competences = [];
  error: {'errorTitle', 'errorDesc'};
  constructor(private sharedService: SharedService) {
    this.sharedService.url = '/admin/competences';

   }

  ngOnInit(): void {
     this.sharedService.getAll()
      .subscribe(
        (data) => {
          this.competences = data,
          console.log(this.competences);
        },
        error => this.error = error,
      );

      }

}

