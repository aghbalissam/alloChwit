import { PagesComponent } from './pages/pages.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
    declarations: [
        AppComponent,
        ShopComponent,
        PagesComponent,
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      BrowserAnimationsModule,
      HttpClientModule,
      LoadingBarHttpClientModule,
      LoadingBarRouterModule,
      AppRoutingModule,
      SharedModule,
      MaterialModule,
      NgbModule,
      NgxSkeletonLoaderModule
      /*ToastrModule.forRoot({
        timeOut: 3000,
        progressBar: false,
        enableHtml: true,
      })*/
    ]
})
export class AppModule { }
