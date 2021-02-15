import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { CompetenceRoutingModule } from './competence-routing.module';
import { CompetencesComponent } from './competences.component';
import { CreateCompetencesComponent } from './create-competences/create-competences.component';

@NgModule({
  imports: [
    CommonModule,
    CompetenceRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
  ],
  declarations: [
    CompetencesComponent,
    CreateCompetencesComponent,
  ],

})

export class CompetenceModule { }
