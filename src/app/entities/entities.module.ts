import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntitiesRoutingModule } from './entities-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    EntitiesRoutingModule
  ],
})

export class EntitiesModule { }
