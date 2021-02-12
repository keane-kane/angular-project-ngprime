import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/entities/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/entities/users/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'admin',
        component: LayoutComponent,
        children: [{
            path: 'briefs',
            loadChildren: () => import('src/app/entities/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'rendus',
            loadChildren: () => import('src/app/entities/department/department.module').then(m => m.DepartmentModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'explorer',
            loadChildren: () => import('src/app/entities/employees/employees.module').then(m => m.EmployeesModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'forum',
            loadChildren: () => import('src/app/entities/contactus/contactus.module').then(m => m.ContactUsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'parametre',
            loadChildren: () => import('src/app/entities/entities.module').then(m => m.EntitiesModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'users',
            loadChildren: () => import('src/app/entities/users/user.module').then(m => m.UserModule),
            canActivate: [AuthGuard]
        }
        ]
    },
    {
        path: 'error',
        component: PageNotFoundComponent,
        // loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
