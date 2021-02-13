import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilSortisComponent } from './profil-sortis.component';

const routes: Routes = [

    {  path: '', component: ProfilSortisComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilSortisRoutingModule { }
