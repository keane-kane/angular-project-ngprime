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
  error: any;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private routeStateService: RouteStateService,
    private router: Router) {

    }

  ngOnInit(): void {
    this.sharedService.url = '/admin/profils';
    const id  = +this.route.snapshot.params.id;

      this.sharedService.getById(id).subscribe(data => {
        this.profils = data['users'];
        console.log(this.profils);
      });

  }

  back() {
    this.routeStateService.loadPrevious();
  }
  onDelete(id: number): void {
    this.sharedService.url = '/users';
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.sharedService.delete(+id).subscribe(
        res => {
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }

  onEdit(id: number, profil: string): any {

    this.routeStateService.add('User details', '/admin/users/edit-user/' + id, profil, false);
  }

  onDetail(id: number): any {
    this.routeStateService.add('User details', '/admin/users/detail-user/' + id, id, false);
   }
}

