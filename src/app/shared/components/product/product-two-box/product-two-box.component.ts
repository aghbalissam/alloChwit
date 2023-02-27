import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-two-box',
  templateUrl: './product-two-box.component.html',
  styleUrls: ['./product-two-box.component.scss']
})
export class ProductTwoBoxComponent implements OnInit {

  @Input()
  product : any;
  
  constructor() { }

  ngOnInit(): void {
  }


  showPrice(event:Event, price: number)
  {
    let btn = event.target as HTMLElement
    btn.setAttribute('disabled', 'true');
    this.product.p.total += price;

    // Traitement des cas
  }

}
