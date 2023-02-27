import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxproduct',
  templateUrl: './boxproduct.component.html',
  styleUrls: ['./boxproduct.component.scss']
})
export class BoxproductComponent implements OnInit {

  @Input()
  singleMenu : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
