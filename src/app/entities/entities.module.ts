import { NgModule } from '@angular/core';
import { EntitiesRoutingModule } from './entities-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilSortisComponent } from './profil-sortis/profil-sortis.component';



@NgModule({
  declarations: [
  ProfilSortisComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    EntitiesRoutingModule
  ],
})

export class EntitiesModule { }
