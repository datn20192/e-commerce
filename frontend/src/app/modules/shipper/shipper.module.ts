import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../../shared/shared-module';
import { ShipperRoutingModule } from './shipper-routing.module';

// Components
import { ShipperComponent } from './shipper.component';
import { ShipperDeliveryComponent } from './delivery/shipper-delivery.component';

@NgModule({
    imports: [
        SharedModule,
        ShipperRoutingModule
    ],
    declarations: [ 
        ShipperComponent,
        ShipperDeliveryComponent       
    ]
})
export class ShipperModule {}