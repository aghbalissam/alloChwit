import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleres',
  templateUrl: './singleres.component.html',
  styleUrls: ['./singleres.component.scss']
})
export class SingleresComponent implements OnInit {
  @Input()
  count !: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
