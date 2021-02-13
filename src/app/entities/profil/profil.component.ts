import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, NgForm, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  profils: [] = [];
  profil: any;
  error = '';
  userForm: FormGroup;
  @ViewChild('input') elRefs: ElementRef;
  @ViewChild('f') myForm: NgForm;
  uploadError: any;
  columns: any[];
  constructor(
    private sharedService: SharedService,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private routeStateService: RouteStateService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.sharedService.url = '/admin/profils?archive=false';
    this.columns = [
      { field: 'libelle', header: 'Libelle' }];

    this.sharedService.getAll().subscribe((profils) => {
      this.profils = profils;
    });

  }

  onDelete(id: number): void {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.sharedService.url = '/admin/profils';
      this.sharedService.delete(+id).subscribe(
        (res) => {
          this.ngOnInit();
          console.log(res);
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
