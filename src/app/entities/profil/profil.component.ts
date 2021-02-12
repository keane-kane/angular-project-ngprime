import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, NgForm,FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  profils: [] = [];
  error = '';
  profilForm: FormGroup;
  edit = 'form-control disabled';
  @ViewChild('input') elRefs: ElementRef;
  @ViewChild('f') myForm: NgForm;
  uploadError: any;
  constructor(
    private sharedService: SharedService,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.sharedService.url = '/admin/profils';
  }

  ngOnInit(): void {
    this.sharedService.getAll().subscribe((profils) => {
      this.profils = profils;
      console.log(this.profils);
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

  onChange(id: number, f): void {


    const el = this.elRef.nativeElement
    .querySelectorAll('.form-control')[id - 1];
    console.log(el.focus());
    if (f.value && f.disabled !== true){
      this.renderer.addClass(el, 'disabled') ;
    }else{
      el.focus()
    }
  }


  onEdit(id: number, f): any {
  const el = this.elRef.nativeElement
             .querySelectorAll('.form-control')[id - 1];
  this.renderer.removeClass(el, 'disabled') ;
  el.focus()

  }
  // getImageSecControl(): any {
  //   return (this.profilForm.get('imagesSec') as FormArray).controls;
  // }
  // onAddSecImage(): void {
  //   const control = new FormControl('', Validators.required);
  //   (this.profilForm.get('imagesSec') as FormArray).push(control);
  // }

}



