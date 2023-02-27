import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-single',
  templateUrl: './breadcrumb-single.component.html',
  styleUrls: ['./breadcrumb-single.component.scss']
})
export class BreadcrumbSingleComponent implements OnInit {
  @Input()
  currentRest : any;

  constructor( ) { }

  ngOnInit(): void {

  }

}
