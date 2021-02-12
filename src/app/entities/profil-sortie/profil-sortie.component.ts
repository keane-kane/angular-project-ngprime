import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.scss'],
})
export class ProfilSortieComponent implements OnInit {
  profilSorti = [];
  error: string;
  constructor(private sharedService: SharedService) {
    this.sharedService.url = '/api/admin/profilsorties';
  }

  ngOnInit(): void {
    this.sharedService.getAll().subscribe((profilSorties) => {
      (this.profilSorti = profilSorties), console.log(profilSorties);
    });
  }
  onDelete(id: number): void {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.sharedService.delete(+id).subscribe(
        (res) => {
          console.log(res);
          this.ngOnInit();
        },
        (error) => (this.error = error)
      );
    }
  }
  onEdit(id): void {}
}
