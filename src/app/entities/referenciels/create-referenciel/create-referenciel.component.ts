import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-create-referenciel',
  templateUrl: './create-referenciel.component.html',
  styleUrls: ['./create-referenciel.component.scss']
})
export class CreateReferencielComponent implements OnInit {

  refs = [];
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  refForm: FormGroup;
  placeholder: string;


   constructor(
     private fb: FormBuilder,
     private sharedService: SharedService,
     private router: Router,
     private route: ActivatedRoute,
     private routeStateService: RouteStateService,
   ) {
     this.sharedService.url = '/admin/refernciels';
    }


    ngOnInit(): void {

     const id = this.route.snapshot.paramMap.get('id');
     if (id) {
       this.pageTitle = 'Edit refernciels';
       this.sharedService.getById(+id).subscribe(
         res => {
           this.refForm.patchValue({
             id: res.id,
             libelle: res.libelle,
             competenceViser: res.competenceViser,
             criteresEvaluation: res.criteresEvaluation,
             presentation: res.presentation,
             criteresAdmission: res.criteresAdmission,
             programmes: res.programmes,
             groupes: res.groupes,
             groupeCompetences: res.groupeCompetences

           });
           this.imagePath = res.avatar;
           this.refForm = res;
           console.log(res);
           console.log(this.refForm);

         }
       );
     } else {
       this.pageTitle = 'Créer refernciels';
     }
 
     this.refForm = this.fb.group({
       id: [''],
       libelle: ['', Validators.required],
       competenceViser: ['', Validators.required],
       criteresEvaluation: ['', Validators.required],
       programmes: ['', Validators.required],
       presentation: ['', Validators.required],
       criteresAdmission: ['', Validators.required],
       groupeCompetences: [''],
       groupes: [''],

     });
   }

   onSelectedFile(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.placeholder =  file.name + ' is selected';
      this.refForm.controls['programmes'].setValue(file);
    }
  }

   get f() { return this.refForm.controls; }
   onSubmit(): void {

     if (this.refForm.invalid) {
       console.log('formulaire invalid');
       return;
     }
     console.log(this.refForm);
     const formData = new FormData();

     formData.append('competenceViser', this.refForm.get('competenceViser').value);
     formData.append('libelle', this.refForm.get('libelle').value);
     formData.append('criteresEvaluation', this.refForm.get('criteresEvaluation').value);
     formData.append('criteresAdmission', this.refForm.get('criteresAdmission').value);
     formData.append('description', this.refForm.get('description').value);
     formData.append('groupeCompetences', this.refForm.get('groupeCompetences').value);
     formData.append('groupes', this.refForm.get('groupes').value);

     const id = this.refForm.get('id').value;
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
        console.log(formData);

       this.sharedService.create(formData).subscribe(
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

}
