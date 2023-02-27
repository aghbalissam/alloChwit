import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm : string = "";
  partners : any[] = [];
  menus : any[] = []; 
  city !: string;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private dataService: DataService,
    private globalService : GlobalService
  ) 
  {    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.city = this.globalService.getAddressValue() as string;
    this.searchTerm = this.activatedRoute.snapshot.params['term']    
    this.search()
  } 

  search()
  {
    this.dataService.searchIn(this.searchTerm).subscribe( (data : any) => {
      this.partners = data.partners
      this.menus = data.menus
      // console.log(this.partners);
      // console.log(this.menus);
    });
  }

}
