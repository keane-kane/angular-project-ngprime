import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGrptagsComponent } from './create-grptags/create-grptags.component';
import { GrpTagsComponent } from './grp-tags.component';

const routes: Routes = [

    {
        path: '', component: GrpTagsComponent
    },
    // {
    //     path: '', component: DetailPromosComponent
    // },
    {
        path: '', component: CreateGrptagsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrptagsRoutingModule { }
