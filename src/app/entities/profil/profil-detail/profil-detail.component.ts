import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.component.html',
  styleUrls: ['./profil-detail.component.scss']
})
export class ProfilDetailComponent implements OnInit {
  profils = [];
  profil: any;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private routeStateService: RouteStateService,
    private router: Router) {

    }

  ngOnInit(): void {
    this.sharedService.url = '/admin/profils';
    const id  = +this.route.snapshot.params.id;

      this.sharedService.getById(id).subscribe(p => {
        this.profils = p['users'];
        console.log(this.profils);
      });

  }

  back() {
    this.routeStateService.loadPrevious();
  }
}
