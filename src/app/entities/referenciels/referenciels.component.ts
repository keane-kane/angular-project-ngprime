import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-referenciels',
  templateUrl: './referenciels.component.html',
  styleUrls: ['./referenciels.component.scss']
})
export class ReferencielsComponent implements OnInit {

  tabs = [1, 2, 3, 5, 6, 7, 7];
  referenciels = [];
  constructor(private sharedService: SharedService) {
    this.sharedService.url = '/api/admin/referenciels';
  }

  ngOnInit(): void {
    this.sharedService.getAll().subscribe(
      referenciels => {
        this.referenciels = referenciels;
        console.log(referenciels);

      }
    );

  }
}
