import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { User } from '../../../core/models/user.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {


  users: User[];
  error = '';
  columns: any[];
  pageSize: number;

  constructor(
    private sharedService: SharedService,
    private routeStateService: RouteStateService,
    ) {

  }

  ngOnInit(): void {
    this.sharedService.url = '/users?archive=false';
    this.pageSize = 10;

    this.columns = [
      { field: 'avatar', header: 'Image' },
      { field: 'prenom', header: 'Prenom' },
      { field: 'nom', header: 'Nom' },
      { field: 'email', header: 'Email' },
      { field: 'action', header: 'Action' }
    ];
    this.sharedService.getAll()
    .subscribe(users => {
      console.log(users);
      this.users = users;
    });

    }

    onFetch(): void {
      this.sharedService.getAll()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
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

      this.routeStateService.add('User edit', '/admin/users/edit-user/' + id, profil, false);
    }

    onDetail(id: number): any {
      this.routeStateService.add('User details', '/admin/users/detail-user/' + id, id, false);
     }
}
