import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grp-competences',
  templateUrl: './grp-competences.component.html',
  styleUrls: ['./grp-competences.component.scss']
})
export class GrpCompetencesComponent implements OnInit {

  tabs = [1, 2, 3, 5, 6, 7, 7, 0];
  grpcompetences = [];
  constructor(private sharedService: SharedService) {
    this.sharedService.url = '/api/admin/grpecompetences';
  }

  ngOnInit(): void {
    this.sharedService.getAll().subscribe(
      grpcompetences => {
        this.grpcompetences = grpcompetences;
        console.log(grpcompetences);

      }
    );

  }

}
