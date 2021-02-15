import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGrpcompetencesComponent } from './create-grpcompetences/create-grpcompetences.component';
import { GrpCompetencesComponent } from './grp-competences.component';

const routes: Routes = [

    {
        path: '', component: GrpCompetencesComponent
    },
    // {
    //     path: '', component: DetailPromosComponent
    // },
    {
        path: '', component: CreateGrpcompetencesComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrpcompetnceRoutingModule { }
