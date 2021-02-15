import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-profil-detail',
  templateUrl: './detail-profilsortis.component.html',
  styleUrls: ['./detail-profilsortis.component.scss']
})
export class DetailProfilSortisComponent implements OnInit {
  profilsortis = [];
  profil: any;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private routeStateService: RouteStateService,
    private router: Router) {

    }

  ngOnInit(): void {
    this.sharedService.url = '/admin/profilsorties';
    const id  = +this.route.snapshot.params.id;

      this.sharedService.getById(id).subscribe(p => {
        this.profilsortis = p;
        console.log(this.profilsortis);
      });

  }

  back() {
    this.routeStateService.loadPrevious();
  }
}
