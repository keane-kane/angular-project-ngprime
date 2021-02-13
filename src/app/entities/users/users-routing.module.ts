import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilDetailComponent } from '../profil/profil-detail/profil-detail.component';
import { ProfilComponent } from '../profil/profil.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [

    {  path: '', component: CreateUserComponent },
    {  path: '', component: ListUserComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
