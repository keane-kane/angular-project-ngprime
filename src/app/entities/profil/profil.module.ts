import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilDetailComponent } from './profil-detail/profil-detail.component';
import { ProfilComponent } from './profil.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    ProfilComponent,
    ProfilDetailComponent,
  ]
})

export class ProfilModule { }
