import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { GrpcompetnceRoutingModule } from './grpcompetence-routing.module';
import { CreateGrpcompetencesComponent } from './create-grpcompetences/create-grpcompetences.component';
import { GrpCompetencesComponent } from './grp-competences.component';

@NgModule({
  imports: [
    CommonModule,
    GrpcompetnceRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
  ],
  declarations: [
    GrpCompetencesComponent,
    CreateGrpcompetencesComponent,
  ],

})

export class GrpcompetenceModule { }
