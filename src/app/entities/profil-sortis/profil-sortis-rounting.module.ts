import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProfilSortisComponent } from './create-profilsortis/create-profilsortis.component';
import { DetailProfilSortisComponent } from './detail-profilsortis/detail-profilsortis.component';
import { ProfilSortisComponent } from './profil-sortis.component';

const routes: Routes = [

    {
        path: '', component: ProfilSortisComponent
    },
    {
        path: '', component: DetailProfilSortisComponent
    },
    {
        path: '', component: CreateProfilSortisComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilSortisRoutingModule { }
