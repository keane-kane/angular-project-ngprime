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

    paymentOptions: any[];

    value1 = 'off';

    value2: 5;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private routeStateService: RouteStateService,
  ) {
    this.sharedService.url = '/admin/users/promo';
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
            referenceAge: res.referenceAge,
            fabrique: res.fabrique

          });
          this.imagePath = res.avatar;
          this.promoForm = res;
          console.log(res);
          console.log(this.promoForm);

        }
      );
    } else {
      this.ref =  this.getRef();
      this.sharedService.url = '/admin/referenciels';
      this.sharedService.getAll().subscribe(
        referenciels => {
          console.log(referenciels);
          referenciels.forEach(ref => {
             this.ref.push(ref);
          });
          console.log(this.ref);

          this.paymentOptions = [
            {name: this.ref['libelle'], value: this.ref['id']},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3},
            {name: 'Option 3', value: 3},
            {name: 'Option 3', value: 3},
            {name: 'Option 3', value: 3}
          ];
          return referenciels;
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
      referenceAge: [''],
      fabrique: ['']
    });
  }

  onSelectedFile(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.promoForm.get('avatar').setValue(file);
    }
  }

  basedOnModeofTrack(obj: any) {
    console.log(obj.value);
    if (obj.value == null) {
      console.log(this.ref);
      this.promoForm.get('referenciels').setValue(obj.value);

    }
  }

  onSubmit(): void {
    console.log(this.promoForm);
    const formData = new FormData();

    formData.append('lieu', this.promoForm.get('lieu').value);
    formData.append('langue', this.promoForm.get('langue').value);
    formData.append('titre', this.promoForm.get('email').value);
    formData.append('description', this.promoForm.get('profil').value);
    formData.append('dateDebut', this.promoForm.get('dateDebut').value);
    formData.append('dateCloture', this.promoForm.get('dateCloture').value);

    const id = this.promoForm.get('id').value;

    if (id) {

      this.sharedService.update(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/users/promos']);
          }
        },
        error => this.error = error
      );
    } else {

      this.sharedService.create(formData).subscribe(
        res => {
          console.log('uuu');

          if (res.status === 'error') {
            this.uploadError = res.message;
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

  getRef(): any {
    this.sharedService.url = '/admin/referenciels';
    this.sharedService.getAll().subscribe(
      referenciels => {
        return referenciels;
      });
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
