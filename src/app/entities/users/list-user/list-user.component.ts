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
    routeStateService: RouteStateService,
    ) {

  }

  ngOnInit(): void {
    this.sharedService.url = '/users';
    this.pageSize = 10;

    this.columns = [
      { field: 'id', header: 'Id' },
      { field: 'prenom', header: 'Prenom' },
      { field: 'nom', header: 'Address' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' }
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
      if (confirm('Are you sure want to delete id = ' + id)) {
        this.sharedService.delete(+id).subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          error => this.error = error
        );
      }
    }

    onEdit(id) {}
}
