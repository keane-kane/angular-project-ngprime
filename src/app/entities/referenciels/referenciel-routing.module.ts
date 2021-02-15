import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReferencielComponent } from './create-referenciel/create-referenciel.component';
import { DetailReferencielComponent } from './detail-referenciel/detail-referenciel.component';
import { ReferencielsComponent } from './referenciels.component';

const routes: Routes = [

    {
        path: '', component: ReferencielsComponent
    },
    {
        path: '', component: DetailReferencielComponent
    },
    {
        path: '', component: CreateReferencielComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReferencielRoutingModule { }
