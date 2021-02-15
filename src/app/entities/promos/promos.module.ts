import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { CreatePromosComponent } from './create-promos/create-promos.component';
import { PromosRoutingModule } from './promos-routing.module';
import { PromosComponent } from './promos.component';
import { DetailPromosComponent } from './detail-promos/detail-promos.component';
import { DragDropDirective } from 'src/app/directive/drag-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    PromosRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
  ],
  declarations: [
    PromosComponent,
    CreatePromosComponent,
    DetailPromosComponent,
    DragDropDirective
  ],
  providers: []

})

export class PromosModule { }
