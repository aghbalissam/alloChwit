import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-shared-box',
  templateUrl: './product-shared-box.component.html',
  styleUrls: ['./product-shared-box.component.scss']
})
export class ProductSharedBoxComponent implements OnInit {

  @Input()
  product : any;

  constructor(
    private cartService: CartService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  increaseQuantity()
  {
    this.product.p.quantity++;
    this.product.p.total += this.product.p.price;
  }

  decreaseQuantity()
  {
    this.product.p.quantity--;
    this.product.p.total -= this.product.p.price;
  }

  addToCart()
  {
    this.cartService.addProduct(this.product.p);
    this.dialog.closeAll();
    // this.changeValue(false); 
  }
}
