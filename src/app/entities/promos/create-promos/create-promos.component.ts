import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-create-promos',
  templateUrl: './create-promos.component.html',
  styleUrls: ['./create-promos.component.scss']
})
export class CreatePromosComponent implements OnInit {
 refs = [];
 pageTitle: string;
 error: string;
 uploadError: string;
 imagePath: string;
 promoForm: FormGroup;
 ref = [];

 stateOptions: any[];

    paymentOptions = [];

    value1 = 'off';

    value2: 5;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private routeStateService: RouteStateService,
  ) {
    this.sharedService.url = '/admin/promo';
    this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

   }


   ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Editer une promotion';
      this.sharedService.getById(+id).subscribe(
        res => {
          this.promoForm.patchValue({
            id: res.id,
            langue: res.langue,
            lieu: res.lieu,
            titre: res.titre,
            description: res.description,
            datDebut: res.datDebut,
            dateCloture: res.dateCloture,
            referenciels: res.referenciels,
            referenceAgate: res.referenceAgate,
            fabrique: res.fabrique

          });
          this.imagePath = res.avatar;
          this.promoForm = res;
          console.log(res);
          console.log(this.promoForm);

        }
      );
    } else {
      this.sharedService.url = '/admin/referenciels';
      this.sharedService.getAll().subscribe(
        referenciels => {
          this.ref = referenciels;
          console.log(this.ref);
          referenciels.forEach(elt => {
            this.paymentOptions.push({name: elt.libelle, value: elt.id});
            return this.paymentOptions;
          });
        });
      this.pageTitle = 'Créer une promotion';
    }

    this.promoForm = this.fb.group({
      id: [''],
      langue: ['', Validators.required],
      lieu: ['', Validators.required],
      titre: [''],
      description: [''],
      avatar: [''],
      dateDebut: [''],
      dateCloture: [''],
      referenciels: [''],
      referenceAgate: [''],
      fabrique: ['']
    });
  }

  onSelectedFile(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.promoForm.get('avatar').setValue(file);
    }
  }

  basedOnModeofTrack(obj: any) {
    console.log(obj.value);
    if (obj.value == null) {
      this.promoForm.get('referenciels').setValue(obj.value);
       console.log(this.promoForm);

    }
  }
  get f() { return this.promoForm.controls; }
  onSubmit(): void {
    this.sharedService.url = '/admin/promo';
    if (this.promoForm.invalid) {
      console.log('formulaire invalid');
      return;
    }
    console.log(this.promoForm);
    const formData = new FormData();
    const form = JSON.stringify(this.promoForm.value, null, 4);
    console.log(form);
    
    formData.append('lieu', this.promoForm.get('lieu').value);
    formData.append('langue', this.promoForm.get('langue').value);
    formData.append('titre', this.promoForm.get('titre').value);
    formData.append('fabrique', this.promoForm.get('fabrique').value);
    formData.append('description', this.promoForm.get('description').value);
    formData.append('dateDebut', this.promoForm.get('dateDebut').value);
    formData.append('dateCloture', this.promoForm.get('dateCloture').value);
    formData.append('referenceAgate', this.promoForm.get('referenceAgate').value);
    
    const formD = JSON.stringify(formData, null, 4);
    console.log(formD);
    
    const id = this.promoForm.get('id').value;

    if (id) {

      this.sharedService.update(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            console.log(res.staus);
          } else {
            this.router.navigate(['/admin/users/promos']);
          }
        },
        error => this.error = error
        );
      } else {

      this.sharedService.create(formD).subscribe(
        res => {
          if (res.status === 'error') {
            console.log(res.staus);
            console.log('uuu');
          } else {
            this.router.navigate(['/admin/users/promos']);
          }
        },

        error => {
          this.error = error,
          console.log(error);
        }
      );
    }
  }


  // uploadFile(event): void {
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let index = 0; index < event.length; index++) {
  //     const element = event[index];
  //     this.files.push(element.name);
  //   }
  // }

  // deleteAttachment(index): void {
  //   this.files.splice(index, 1);
  // }
}
