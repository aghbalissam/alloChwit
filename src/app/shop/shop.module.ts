import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        CartComponent,
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class ShopModule { }
