import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  placeholder = 'Uploader an image';

  userForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private routeStateService: RouteStateService,
  ) {this.sharedService.url = '/users'; }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit User';
      this.sharedService.getById(+id).subscribe(
        res => {
          this.userForm.patchValue({
            id: res.id,
            nom: res.nom,
            prenom: res.prenom,
            email: res.email,
            username: res.username,
            profil: res.profil,
            phone: res.phone
          });
          this.imagePath = res.avatar;
          this.user = res;
          console.log(res);
          console.log(this.user);

        }
      );
    } else {
      this.pageTitle = 'Add User';
    }

    this.userForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: [''],
      username: [''],
      avatar: [''],
      profil: [''],
      phone: ['']
    });
  }

  onSelectedFile(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.placeholder =  file.name + ' is selected';


      this.userForm.get('avatar').setValue(file);
    }
  }


  onSubmit(): void {
    console.log(this.userForm);
     
    this.updateUrl();
    const formData = new FormData();

    formData.append('nom', this.userForm.get('nom').value);
    formData.append('prenom', this.userForm.get('prenom').value);
    formData.append('email', this.userForm.get('email').value);
    formData.append('profil', this.userForm.get('profil').value);
    formData.append('username', this.userForm.get('username').value);
    formData.append('phone', this.userForm.get('phone').value);

    const id = this.userForm.get('id').value;

    if (id) {

      this.sharedService.update(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/users/user-list']);
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
            this.router.navigate(['/admin/users/user-list']);
          }
        },

        error => {
          this.error = error,
          console.log(error);
        }
      );
    }
  }

  private updateUrl() {
    const routeState = this.routeStateService.getCurrent();

    if (routeState.data  == '/api/admin/profils/1') {
        this.sharedService.url = '/admin/users';

    } else if (routeState.data  == '/api/admin/profils/3') {
       this.sharedService.url = '/admin/users/formateurs';

    } else if (routeState.data  == '/api/admin/profils/4') {
      this.sharedService.url = '/admin/users/cms';

    } else if (routeState.data  == '/api/admin/profils/2') {
      this.sharedService.url = '/admin/users/apprenants';
    }
  }


  clearInputFields(e) {
    const all = e.target.querySelectorAll('input');
     Object.keys(all).forEach(key => {
         console.log(all[key].value = '');
     });
   }
}
