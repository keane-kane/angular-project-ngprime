import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-profil-sortis',
  templateUrl: './profil-sortis.component.html',
  styleUrls: ['./profil-sortis.component.scss']
})
export class ProfilSortisComponent implements OnInit {
  profilSortis = [];
  error: string;

  userForm: FormGroup;
  columns: any[];
  constructor(
    private sharedService: SharedService,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private routeStateService: RouteStateService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    this.sharedService.url = '/api/admin/profilsorties';
    this.columns = [
      { field: 'libelle', header: 'Libelle' }];

  }

  ngOnInit(): void {
    this.sharedService.getAll().subscribe((profilSorties) => {
      (this.profilSortis = profilSorties), console.log(profilSorties);
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
  onChange(id: number, input): void {


    const el = this.elRef.nativeElement
    .querySelectorAll('.form-control')[id - 1];
    if (null !== true) {
      this.renderer.addClass(el, 'disabled') ;
    } else {
      el.focus();
      return;
    }
    if (input.value != null) {

      this.sharedService.getById(+id).subscribe(profil => {
        this.userForm.patchValue({
          id: profil.id,
          libelle: profil.libelle
        });
    });
      this.userForm.get('libelle').setValue(input.value);
      console.log(this.userForm);
    }


  }

  onEdit(id: number): any {
  const el = this.elRef.nativeElement.querySelectorAll('.form-control')[id - 1];
  this.renderer.removeClass(el, 'disabled'),
  el.focus();

 }

 onDetail(id: number): any {
  this.routeStateService.add('Profil details', '/admin/users/detail-profil/' + id, id, false);
 }

}
