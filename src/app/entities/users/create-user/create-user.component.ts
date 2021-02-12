import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute
  ) {this.sharedService.url = '/api/users'; }

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
            this.router.navigate(['/admin/users']);
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
            this.router.navigate(['/admin/users']);
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
