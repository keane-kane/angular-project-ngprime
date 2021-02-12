import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilDetailComponent } from './profil-detail/profil-detail.component';
import { ProfilComponent } from './profil.component';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
  ],
  declarations: [
    ProfilComponent,
    ProfilDetailComponent,
  ]
})

export class ProfilModule { }
