import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { ProfilSortisComponent } from './profil-sortis.component';
import { ProfilSortisRoutingModule } from './profil-sortis-rounting.module';
import { PanelModule } from 'primeng/panel';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    ProfilSortisRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    PanelModule,
    BreadcrumbModule
  ],
  declarations: [
    ProfilSortisComponent,
  ],

})

export class ProfilsortieModule { }
