import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './search/search.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SharedModule } from "../shared/shared.module";
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AboutUsComponent,
        AccountComponent,
        SearchComponent,
        ErrorComponent,
        FaqComponent,
        RestaurantsComponent,
        SingleRestaurantComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        MaterialModule,
        NgbNavModule
    ]
})
export class PagesModule { }
