import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipperComponent } from './shipper.component';
import { ShipperDeliveryComponent } from './delivery/shipper-delivery.component';
import { ShipperModuleGuard } from '../../guards/shipper/shipper-module.guard';

const shipperRoute: Routes = [
    {
        path: '',
        component: ShipperComponent,
        data: {
            title: 'Giao hàng'
        },
        canActivate: [ShipperModuleGuard],
        canActivateChild: [ShipperModuleGuard],
        children: [
            {
                path: '',
                component: ShipperDeliveryComponent,
                data: {
                    title: 'Đơn hàng'
                }
            }
        ]
        
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(shipperRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class ShipperRoutingModule {}