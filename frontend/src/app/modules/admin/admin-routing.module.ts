import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const adminRoute: Routes = [
    {
        path: '',
        component: AdminComponent,
        data: {
            title: 'Quản lý'
        }
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}