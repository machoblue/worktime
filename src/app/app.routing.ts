import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {WorkComponent} from './home/work/work.component';
import {UsersComponent} from './home/users/users.component';
import {TasksComponent} from './home/tasks/tasks.component';

const myRoutes = [
    {
        path: 'login', 
        component: LoginComponent
    },
    {
                path: 'work',
                component: WorkComponent
    },
    {
        path: 'home', 
        component: HomeComponent,
        children: [
            {
                path: 'work',
                component: WorkComponent,
            },
            {
                path: 'users',
                component: UsersComponent,
            },
            {
                path: 'tasks',
                component: TasksComponent,
            },
            {
                path:'',
                redirectTo: 'work',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '', 
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**', 
        redirectTo: 'login'
    }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
