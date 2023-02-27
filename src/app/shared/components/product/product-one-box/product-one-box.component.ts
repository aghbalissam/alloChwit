import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-one-box',
  templateUrl: './product-one-box.component.html',
  styleUrls: ['./product-one-box.component.scss']
})
export class ProductOneBoxComponent implements OnInit {

  @Input()
  product : any;

  constructor() { }

  ngOnInit(): void {
  }
}
