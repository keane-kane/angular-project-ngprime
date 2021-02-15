import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { ProfilSortisComponent } from './profil-sortis.component';
import { ProfilSortisRoutingModule } from './profil-sortis-rounting.module';
import { CreateProfilSortisComponent } from './create-profilsortis/create-profilsortis.component';
import { DetailProfilSortisComponent } from './detail-profilsortis/detail-profilsortis.component';

@NgModule({
  imports: [
  CommonModule,
    ProfilSortisRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
  ],
  declarations: [
    ProfilSortisComponent,
    CreateProfilSortisComponent,
    DetailProfilSortisComponent
  ],

})

export class ProfilSortisModule { }
