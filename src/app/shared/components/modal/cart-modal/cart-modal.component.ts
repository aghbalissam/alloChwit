import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { UserAuthComponent } from '../user-auth/user-auth.component';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['../../../shared.scss','./cart-modal.component.scss']
})

export class CartModalComponent implements OnInit {

  @Input()
  idRes : any | number;

  constructor(
    private cartService : CartService,
    private router : Router,
    private dialog : MatDialog,
    private authSrv : AuthentificationService  
  ) { }

  ngOnInit(): void {
  }

  getAllOrders()
  {
    return this.cartService.getAllProducts(this.idRes);
  }

  removeProduct(prod : any)
  {
    this.cartService.removeProduct(prod);
  }

  totalC()
  {
    return this.cartService.calculTotal(this.idRes);
  }
  
  goToCheckout()
  {
    this.cartService.activeResCheckout(this.idRes);
    if(this.authSrv.loggedIn())
    {
      this.router.navigate(['/checkout']);
    }
    else
    {
      this.dialog.open(UserAuthComponent, {
        // send user to checkout after login or register
      })
    }
  }
}
