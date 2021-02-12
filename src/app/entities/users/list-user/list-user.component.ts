import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {


  users: User[] = [];
  error = '';
  config = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.users.length
  };

  constructor(private sharedService: SharedService)
   { this.sharedService.url = '/users'; }

  ngOnInit(): void {
      this.onFetch();
    }

    onFetch(): void{
      this.sharedService.getAll()
      .subscribe(users =>
      {

        console.log(users);
        this.users = users;
        console.log(this.users);
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

    onPageChange(event): void{
      console.log(event);
      this.config.currentPage = event;
    }
}
