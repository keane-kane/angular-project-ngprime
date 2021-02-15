import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent implements OnInit {
  promos: any[];
  error = '';
  columns: any[];
  pageSize: number;

  constructor(
    private sharedService: SharedService,
    private routeStateService: RouteStateService,
    ) {

  }
  ngOnInit(): void {
    this.sharedService.url = '/admin/promo';
    this.pageSize = 10;

    this.columns = [
      { field: 'id', header: 'Id' },
      { field: 'titre', header: 'Titre' },
      { field: 'lieu', header: 'Lieu' },
      { field: 'fabrique', header: 'Fabrique' },
      { field: 'action', header: 'Action' },
    ];
    this.sharedService.getAll()
    .subscribe(promos => {
      console.log(promos);
      this.promos = promos;
    });

  }
  onDelete(id: number): void {
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
