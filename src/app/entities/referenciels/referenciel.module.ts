import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { ReferencielsComponent } from './referenciels.component';
import { CreateReferencielComponent } from './create-referenciel/create-referenciel.component';
import { DetailReferencielComponent } from './detail-referenciel/detail-referenciel.component';
import { ReferencielRoutingModule } from './referenciel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReferencielRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
  ],
  declarations: [
    ReferencielsComponent,
    CreateReferencielComponent,
    DetailReferencielComponent
  ],

})

export class ReferencielModule { }
