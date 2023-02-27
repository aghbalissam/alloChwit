import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../shared/shared.scss','./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  resName !: string; 
  cardDetails = false;
  shipping = 10;  // Just example

  constructor(
    private router : Router,
    private cartService : CartService,
    private location : Location,
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.checkCart();
    this.resName = this.cartService.getActiveItem().nameRes; 
  }

  totalCheckout()
  {
    return this.totalC() + this.shipping; /* temporarily */
  }

  getCartItems()
  {
    return this.cartService.getActiveItem().products;
  }

  totalC()
  {
    return this.cartService.calculTotal(this.cartService.getActiveItem().idRes);
  }

  removeProduct(prod : any)
  {
    this.cartService.removeProduct(prod);
    this.checkCart();
  }

  // Method to post data
  validateOrder()
  {
    let date = new Date();
    this.dataService.addOrders({
      'user' : JSON.parse(localStorage.getItem('user') as string)._id,
      'order' : this.cartService.getActiveItem(),
    }).subscribe( data => {
      console.log(data);
    })
  }

  goBack()
  {
    // go to last restaurant (not previous page)
    // this.router.navigate[this.cartService.getActiveItem().slugRes]
    this.location.back();
  }

  checkCart()
  {
    if(this.getCartItems().length == 0)
      this.goBack();
  }

}
