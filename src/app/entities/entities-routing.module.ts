import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';

const routes: Routes = [

    {
        path: 'profil',
        component: ProfilComponent,
        loadChildren: () => import('src/app/entities/profil/profil.module').then(m => m.ProfilModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule { }
