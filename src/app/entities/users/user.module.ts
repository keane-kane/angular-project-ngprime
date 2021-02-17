import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { SafeimgPipe } from 'src/app/pipes/safeimg.pipe';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    NgxQRCodeModule,
  ],
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    DetailUserComponent,
    SafeimgPipe,
  ]
})
export class UserModule { }
