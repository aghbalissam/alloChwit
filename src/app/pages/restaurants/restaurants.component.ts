import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { filters, filterTypes } from 'src/app/filters';
import { GlobalService } from 'src/app/services/global.service';
 

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  listRestaurants : any ;
  city : string | null | undefined;   // Get this value from service
  categories : string[] = [];         
  types : string [] = [];
  filtersCat = filters;
  filterTyp = filterTypes;
  filterOp : any = 'all';
  loading = true;

  constructor(
    private route: Router,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private globalServcie: GlobalService
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    // get address from service 
    this.city = this.activatedRoute.snapshot.paramMap.get('city');
    
    // remove this operation
    // use auth guard activate this route
    if(this.city)
    {
      if(!this.globalServcie.getAllAdrs().includes(''+this.city))
        this.route.navigate(['/']);
    }

    this.dataService.getlistRestaurants(this.city).subscribe(data =>
    { 
      this.loading = false;
      this.listRestaurants = data; 
      this.generateCategories();
      this.generateTypes(); 
    })

    this.activatedRoute.queryParams.subscribe(data => {
      if(data['filterBy'] && data['v'])
      {
        this.filterOp = {
          filterBy : data['filterBy'],
          value : data['v']
        }
        this.getlistRestaurants();
      }
    })
  }

  // convert to [routerLink]
  generateLink(slogan:string)/*:string*/
  {
    return '/'+ this.city + '/restaurants/' + slogan;
  }

  storeRes(restaurant: any)
  {
    localStorage.setItem('currentRes', JSON.stringify(restaurant));
  }

  generateTypes():void
  {
    this.listRestaurants.forEach((res : any) => {
      if(!this.types.includes(res.type))
      this.types.push(res.type);
    })
  }

  generateCategories():void
  {
    this.listRestaurants.forEach((res : any) => {
      res.categories.forEach((category: any) => {
        if(!this.categories.includes(category))
        {
          this.categories.push(category);
        }
      })
    })
  }

  findImage(arr : any[],name : string)
  {
    let imgSrc = arr.find(fil => fil.name == name)
    return imgSrc?.image;
  }

  filterLink(fby: string,val: string)
  {
    this.route.navigate([], {
      queryParams: {
        filterBy: fby,
        v:val
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });
  }


  getlistRestaurants()
  {
    let arr : any[] = [];

    if(this.filterOp == "all")
    {
      return this.listRestaurants;
    }
    
    if(this.filterOp.filterBy == 'type')
    {
      this.listRestaurants.forEach((res : any) => {
        if(res.type.includes(''+this.filterOp.value))
        {
          arr.push(res)
        }
      })
    }
    
    if(this.filterOp.filterBy == 'category')
    {
      this.listRestaurants.forEach((res :any, index : number) => {
        if(res.categories.includes(''+this.filterOp.value))
        {
          arr.push(res)
        }
      })
    }

    return  arr; 
  }

  /**
   *  Old Functions
  **/ 

  // generateLinkFilter(type: string,value: string)
  // {
  //   return '/'+ this.city + '/restaurants/filter?' + slogan;
  // }

  // generateList():void
  // {    
  //   if(this.city)
  //     this.listRestaurants = this.dataService.listRestaurants.filter(res => res.city == this.city);
  // }

}
