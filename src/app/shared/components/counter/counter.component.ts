import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {
  @Input() product : any;
  @Input() clsName : any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  // Optimize this code

  dec(prod:any)
  {
    if(prod.quantity > 1)
    {
      prod.quantity--;
      this.globalOperation(prod)  /* global !! */
    }
  }

  inc(prod:any)
  {
    prod.quantity++;
    this.globalOperation(prod)
  }

  globalOperation(prod: any)
  {
    prod.total = prod.quantity * prod.price;
    this.cartService.editProduct(prod);
  }

}
