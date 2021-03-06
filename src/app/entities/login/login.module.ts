import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/entities/login/login.component';
import { LoginRoutingModule } from 'src/app/entities/login/login.routing';
import { AppCommonModule } from 'src/app/app.common.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppCommonModule,
  ],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule { }
