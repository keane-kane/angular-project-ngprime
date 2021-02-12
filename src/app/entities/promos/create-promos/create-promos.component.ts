import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-promos',
  templateUrl: './create-promos.component.html',
  styleUrls: ['./create-promos.component.scss']
})
export class CreatePromosComponent implements OnInit {
 refs = [1, 2, 3, 4, 5, 5 , 4, 6];
 files = [];
  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event): void {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }
  deleteAttachment(index): void {
    this.files.splice(index, 1);
  }
}
