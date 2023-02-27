import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, startWith, delay } from 'rxjs';
import { Product } from '../interfaces';
import { ToastrModule, ToastrService } from 'ngx-toastr';
/*
const state = {
  cart: JSON.parse(localStorage['cartItems'] || '[]'),
  products: JSON.parse(localStorage['products'] || '[]'),
}
*/

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {


  public Currency = { name: 'Euro', currency: 'EUR', price: 1 } // Default Currency
  public OpenCart: boolean = false;
  public Products : any;

  constructor(private http: HttpClient,
    private toastrService: ToastrService) { }

  /*
    ---------------------------------------------
    -----------------  Cart  --------------------
    ---------------------------------------------
  */

  // Get Cart Items
  public get cartItems(): Observable<Product[]> {
    const itemsStream = new Observable(observer => {
      observer.next(state.cart);
      observer.complete();
    });
    return <Observable<Product[]>>itemsStream;
  }

  // Add to Cart
  public addToCart(product:any): any {
    const cartItem = state.cart.find((item :any) => item.id === product.id);
    const qty = product.quantity ? product.quantity : 1;
    const items = cartItem ? cartItem : product;
    const stock = this.calculateStockCounts(items, qty);
    
    if(!stock) return false

    if (cartItem) {
        cartItem.quantity += qty    
    } else {
      state.cart.push({
        ...product,
        quantity: qty
      })
    }

    this.OpenCart = true; // If we use cart variation modal
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true;
  }

  /* Update Cart Quantity
  public updateCartQuantity(product: Product, quantity: number): Product | boolean {
    return state.cart.find((items : any, index :any) => {
      if (items.id === product.id) {
        const qty = state.cart[index].quantity + quantity
        const stock = this.calculateStockCounts(state.cart[index], quantity)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return true
      }
    })
  }*/

  // Calculate Stock Counts
  public calculateStockCounts(product: any, quantity: any) {
    const qty = product.quantity + quantity
    const stock = product.stock
    if (stock < qty || stock == 0) {
      this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
      return false
    }
    return true
  }

  // Remove Cart items
  public removeCartItem(product: Product): any {
    const index = state.cart.indexOf(product);
    state.cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true
  }

  // Total amount 
  public cartTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: Product[]) => {
      return product.reduce((prev, curr: Product) => {
        let price = curr.price;
        if(curr.discount && curr.price && curr.quantity)  {
          price = curr.price - (curr.price * curr.discount / 100)
        }
          return (prev + (price as number) * (curr.quantity as number)) * this.Currency.price;
      }, 0);
    }));
  }
}
