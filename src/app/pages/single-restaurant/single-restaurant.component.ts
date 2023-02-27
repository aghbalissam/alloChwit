import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { QuickViewComponent } from 'src/app/shared/components/modal/quick-view/quick-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['../../shared/shared.scss','./single-restaurant.component.scss']
})

export class SingleRestaurantComponent implements OnInit {

  slogan : any;
  currentRestaurant : any;
  // currentRestaurant : { id: number, name :string, time: string, shipping: string, rating: string, menus: Array<any> | any }= 
  // { 
  //   id: -1,
  //   name : '',
  //   time :'',
  //   shipping :'',
  //   rating :'',
  //   menus: []
  // };

  menus : any[] = [];
  menuslistFilter : Array<string> = [] 
  searchMenus : any = [];
  showMenu = false;
  searchEvent = false;
  searchValue = '';
  searchList: any[] = [];
  loading = true;
  searchV = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog,
  ) 
  {}

  ngOnInit(): void {

    this.slogan = this.activatedRoute.snapshot.paramMap.get('slogan');

    // this.activatedRoute.queryParams.subscribe(data =>
    // {
    //   if(data['s'])
    //   {
    //     this.searchV = data['s'];
    //     this.searchInBox(data['s']);
    //   }
    // })

    this.dataService.getRestaurantMenus(this.slogan).subscribe((data: any) => {
      this.dataService.getSingleRestaurant(this.slogan).subscribe((d:any )=> {
        this.currentRestaurant = d.infos ;
        // console.log('Current restaurant =>', this.currentRestaurant);
      })
      console.log('data => ', data);
      // this.currentRestaurant = JSON.parse(localStorage.getItem('currentRes') as any); // return restaurant [stock this data in localstorage]
      this.loading = false;
      this.menus = data.m;
      this.generateListMenu(data.m);
    })  
  }

  // use menus variable
  generateListMenu(list: Array<any>)
  {
    list.forEach(menu => {
      this.menuslistFilter.push(menu.title);
    })
  }

  updateSelectedProd(product: any)
  {
    product.total = product.price;
    product.quantity = 1;
    product.idRes = this.currentRestaurant._id;
    product.nameRes = this.currentRestaurant.name;
    product.slugRes = this.slogan // add new property to current Restaurant

    // this.productSelected = product;

    let dial = this.dialog.open(QuickViewComponent, {
      data: {
        p : product
      },
    });
  }

  generateLinkSame(part: string)
  {
    // use angular methods to this functions 
    let element = document.getElementById(part);
    if(element) {
      element.scrollIntoView();
    }
  }

  searchInBox(val : HTMLInputElement)
  {
    this.searchValue = val.value.toLowerCase();
    (this.searchValue == '') ? this.searchEvent = false : this.searchEvent = true;
    
    if(this.searchValue.length >= 1 && this.searchValue != " " /* Empty */)
    {
      this.searchList = [];
      this.menus.forEach((m:any) => {
        // Just search in title and description [ search in keywords ]
        // a à â ê  
        m.list.forEach((e:any) => {
          if(e.name.toLowerCase().indexOf(this.searchValue) != -1)
          {
            this.searchList.push(e);
          }
        })
      })
    }

    // Add search in queryParmas [ Problem => return back not working ]
    // this.router.navigate([], {
    //   relativeTo : this.activatedRoute,
    //   queryParams: {
    //     search: value
    //   },
    //   queryParamsHandling: 'merge',
    // });
  }

  targetKey(value: string)
  {
    var rgx = RegExp(this.searchValue, 'g'),
        a = [...value.toLocaleLowerCase().matchAll(rgx)],
        b = value.toLocaleLowerCase().split(rgx).filter(x => x !== ''),   // 
        c =  [], // delete
        first :any  = b, 
        last : any = a;

    if(a[0]!.index == 0)
    {
      first = a;
      last = b;
    }

    for (let i = 0; i < first.length; i++) {
      if(last[i] != undefined)
      {
        // optimize this code
        c.push({
          value: first[i] ? first[i].toString() : first[i],
          type: (this.searchValue == first[i].toString()) ? 'mark' : 'span'
        })
        c.push({
          value: last[i] ? last[i].toString(): last[i],
          type : (this.searchValue == last[i].toString()) ? 'mark' : 'span'
        })
      }
      else
        c.push({
          value: first[i] ? first[i].toString() : first[i],
          type: (this.searchValue == first[i].toString()) ? 'mark' : 'span'
        })
    }
    // old method
    // let str = value.toLocaleLowerCase().split(this.searchValue.toLocaleLowerCase());
    return c;
  }

  menusList()
  {
    return this.currentRestaurant;
  }


  /*
   * Old functions 
   */

  // filterMenu(filterName: string | undefined)
  // {
  //   if(filterName != '')
  //   {
  //     this.menusList = [];
  //     this.menusList.push(this.currentRestaurant.menus.find(menu => menu.title == filterName));
  //   }
  // }

  // findRestaurant()
  // {
  //   let res = this.listRestaurants.find(restaurant => restaurant.slogan == this.slogan && restaurant.city == this.city)
  //   if(res)
  //   { 
  //     this.currentRestaurant = res;
  //     this.generateListMenu(res.menus.m);
  //   }
  //   else
  //     this.router.navigate(['404'])
  // }

}


/**
 * 
 * Modern HTML5 browsers support history.pushState, a technique that 
 * changes a browser's location and history without   triggering 
 * a server page request. The router can compose a "natural" URL 
 * that is indistinguishable from one that would otherwise require 
 * a page load.
 * 
**/
