import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.component.html',
  styleUrls: ['./profil-detail.component.scss']
})
export class ProfilDetailComponent implements OnInit {

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

}
