import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    WidgetsComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
