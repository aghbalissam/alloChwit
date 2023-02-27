import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DropMenuComponent } from './components/drop-menu/drop-menu.component';
import { LayoutBoxComponent } from './components/layout-box/layout-box.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartModalComponent } from './components/modal/cart-modal/cart-modal.component';
import { CartVariationComponent } from './components/modal/cart-variation/cart-variation.component';
import { NewsletterComponent } from './components/modal/newsletter/newsletter.component';
import { QuickViewComponent } from './components/modal/quick-view/quick-view.component';
import { SizeModalComponent } from './components/modal/size-modal/size-modal.component';
import { AddressModalComponent } from './components/modal/address-modal/address-modal.component';
import { BreadcrumbSingleComponent } from './components/breadcrumb-single/breadcrumb-single.component';
import { UserAuthComponent } from './components/modal/user-auth/user-auth.component';
import { CounterComponent } from './components/counter/counter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangepassComponent } from './components/changepass/changepass.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ProductOneBoxComponent } from './components/product/product-one-box/product-one-box.component';
import { ProductTwoBoxComponent } from './components/product/product-two-box/product-two-box.component';
import { ProductSharedBoxComponent } from './components/product/product-shared-box/product-shared-box.component';
import { ProductComponent } from './components/skeleton/product/product.component';
import { SingleresComponent } from './components/skeleton/singleres/singleres.component';
import { CategoryComponent } from './components/skeleton/category/category.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BoxresComponent } from './components/boxres/boxres.component';
import { BoxproductComponent } from './components/boxproduct/boxproduct.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BreadcrumbComponent,
    CategoriesComponent,
    DropMenuComponent,
    LayoutBoxComponent,
    LeftMenuComponent,
    MenuComponent,
    CartModalComponent,
    CartVariationComponent,
    NewsletterComponent,
    QuickViewComponent,
    SizeModalComponent,
    AddressModalComponent,
    BreadcrumbSingleComponent,
    UserAuthComponent,
    CounterComponent,
    SigninComponent,
    SignupComponent,
    ChangepassComponent,
    EditprofileComponent,
    ProductOneBoxComponent,
    ProductTwoBoxComponent,
    ProductSharedBoxComponent,
    ProductComponent,
    SingleresComponent,
    CategoryComponent,
    BoxresComponent,
    BoxproductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    LeftMenuComponent,
    AddressModalComponent,
    CartModalComponent,
    BreadcrumbSingleComponent,
    UserAuthComponent,
    QuickViewComponent,
    CounterComponent,
    BoxresComponent,
    BoxproductComponent,
    ProductComponent,     // skeleton
    CategoryComponent,    // skeleton
    SingleresComponent    // skeleton
  ]
})
export class SharedModule { }
