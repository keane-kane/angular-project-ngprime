import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePromosComponent } from './create-promos/create-promos.component';
import { DetailPromosComponent } from './detail-promos/detail-promos.component';
import { PromosComponent } from './promos.component';

const routes: Routes = [

    {
        path: '', component: PromosComponent
    },
    {
        path: '', component: DetailPromosComponent
    },
    {
        path: '', component: CreatePromosComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromosRoutingModule { }
