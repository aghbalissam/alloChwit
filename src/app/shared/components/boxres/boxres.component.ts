import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxres',
  templateUrl: './boxres.component.html',
  styleUrls: ['./boxres.component.scss']
})
export class BoxresComponent implements OnInit {

  @Input()
  restaurant:any;
   
  constructor() { }

  ngOnInit(): void {
  }

}
