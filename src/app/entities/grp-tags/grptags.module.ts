import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { CreateGrptagsComponent } from './create-grptags/create-grptags.component';
import { GrptagsRoutingModule } from './grptags-routing.module';
import { GrpTagsComponent } from './grp-tags.component';

@NgModule({
  imports: [
    CommonModule,
    GrptagsRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
  ],
  declarations: [
      GrpTagsComponent,
      CreateGrptagsComponent,
  ],

})

export class GrptagsModule { }
