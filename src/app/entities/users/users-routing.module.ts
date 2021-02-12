import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilDetailComponent } from '../profil/profil-detail/profil-detail.component';
import { ProfilComponent } from '../profil/profil.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user-list'
    },
    {  path: 'user-list', component: ListUserComponent },
    {  path: 'create-user', component: CreateUserComponent },
    {  path: 'list-profil', component: ProfilComponent,
        loadChildren: () => import('src/app/entities/profil/profil.module').then(m => m.ProfilModule)
    },
    {  path: 'detail-profil/:id', component: ProfilDetailComponent,
        loadChildren: () => import('src/app/entities/profil/profil.module').then(m => m.ProfilModule)
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
