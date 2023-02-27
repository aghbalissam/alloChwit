import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductOneBoxComponent } from '../../product/product-one-box/product-one-box.component';
import { ProductTwoBoxComponent } from '../../product/product-two-box/product-two-box.component';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})

export class QuickViewComponent implements OnInit {

  // @ViewChild(ProductOneBoxComponent)
  // private ProductOneBoxComp = {} as ProductOneBoxComponent;

  // @ViewChild(ProductTwoBoxComponent)
  // private ProductTwoBoxComp = {} as ProductTwoBoxComponent;


  constructor(
    @Inject(MAT_DIALOG_DATA) public product : any
  ) 
  {}

  ngOnInit(): void {
  }
  
}
