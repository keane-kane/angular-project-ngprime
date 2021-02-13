import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { CreateCompetencesComponent } from './competences/create-competences/create-competences.component';
import { CreateGrpcompetencesComponent } from './grp-competences/create-grpcompetences/create-grpcompetences.component';
import { GrpCompetencesComponent } from './grp-competences/grp-competences.component';
import { GrpTagsComponent } from './grp-tags/grp-tags.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { ProfilDetailComponent } from './profil/profil-detail/profil-detail.component';
import { ProfilComponent } from './profil/profil.component';
import { CreatePromosComponent } from './promos/create-promos/create-promos.component';
import { PromosComponent } from './promos/promos.component';
import { CreateReferencielComponent } from './referenciels/create-referenciel/create-referenciel.component';
import { ReferencielsComponent } from './referenciels/referenciels.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';

const routes: Routes = [

    {
        path: 'profil',
        component: ProfilComponent,
        loadChildren: () => import('src/app/entities/profil/profil.module').then(m => m.ProfilModule)
    },
    { path: 'admin-parms', component: PromosComponent},
    { path: 'create-promos', component: CreatePromosComponent},
    { path: 'profils-sorti', component: ProfilSortieComponent},
    { path: 'grp-compt', component: GrpCompetencesComponent},
    { path: 'create-grp-compt', component: CreateGrpcompetencesComponent},
    { path: 'comptence', component: CompetencesComponent},
    { path: 'create-comptence', component: CreateCompetencesComponent},
    { path: 'grp-tags', component: GrpTagsComponent},
    { path: 'referenciel', component: ReferencielsComponent},
    { path: 'create-referenciel', component: CreateReferencielComponent},

    {
        path: 'list-profil', component: ProfilComponent,
        loadChildren: () => import('src/app/entities/profil/profil.module').then(m => m.ProfilModule)
    },
    {
        path: 'detail-profil/:id', component: ProfilDetailComponent,
        loadChildren: () => import('src/app/entities/profil/profil.module').then(m => m.ProfilModule)
    },
    {
        path: '', component: ListUserComponent,
        loadChildren: () => import('src/app/entities/users/user.module').then(m => m.UserModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule { }
