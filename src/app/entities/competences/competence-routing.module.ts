import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencesComponent } from './competences.component';
import { CreateCompetencesComponent } from './create-competences/create-competences.component';

const routes: Routes = [

    {
        path: '', component: CompetencesComponent
    },
    // {
    //     path: '', component: DetailPromosComponent
    // },
    {
        path: '', component: CreateCompetencesComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetenceRoutingModule { }
