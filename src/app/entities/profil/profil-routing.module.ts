import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilDetailComponent } from './profil-detail/profil-detail.component';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list-profil'
    },
    {  path: 'list-profil', component: ProfilComponent

    },
    {  path: 'detail-profil', component: ProfilDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilRoutingModule { }
