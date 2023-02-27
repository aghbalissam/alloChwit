import { Component, OnInit, AfterViewInit, Host } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import * as L from 'leaflet';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['../../../shared.scss','./address-modal.component.scss']
})

export class AddressModalComponent implements OnInit /*, AfterViewInit*/
{
  searchAdr = ''
  mapPin = false;
  location = true; 
  searchBox = false;
  
  currentLocation : {lat : number, long: number} = {
    lat : 0,
    long : 0
  };
  map : any;

  maxZoom = 30;
  minZoom = 3;
  exampleList :any[] = [] 
  listEmpty : string[] = []; 
  resCof = []

  constructor(
    private router : Router,
    private activatedRouter : ActivatedRoute,
    private globalService : GlobalService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.exampleList = this.globalService.getAllAdrs();
  }

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }


  // initMap(): void {
  //   this.map = L.map('map', {
  //     center: [ 33.5922, -7.6184],
  //     zoom: 8
  //   });

  //   this.map = L.map('map2', {
  //     center: [ 33.5922, -7.6184],
  //     zoom: 8
  //   });

  //   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: this.maxZoom,
  //     minZoom: this.minZoom,
  //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //   });
  //   tiles.addTo(this.map);
  // }

  getCurrentPos()
  {
    navigator.geolocation.getCurrentPosition((position) => {

      // let long = Math.abs(position.coords.longitude);
      //latText.innerText = lat.toFixed(2);
      //longText.innerText = long.toFixed(2);
      this.currentLocation.lat = position.coords.latitude;
      this.currentLocation.long = position.coords.longitude;
      // Show This Location in 


      L.marker([this.currentLocation.lat, this.currentLocation.long]).addTo(this.map);
      this.minZoom = 20

    });
  }

  closePopUp()
  {
    this.mapPin = false;
    this.location = true;
    this.dialog.closeAll();
  }

  searchAdress(searchVal: string)
  {
    // Use Values
    
    // Get directly data from server
    if(searchVal.length > 1)
    {
      let y = searchVal.toLowerCase();
      this.exampleList.forEach((item) => {
        let x = item.toLowerCase();
        if(x.indexOf(y) != -1)
        { 
          if(!this.listEmpty.includes(x))
          this.listEmpty.push(x);
        }
        else if(this.listEmpty.includes(x))
        {
          let u = this.listEmpty.findIndex(city => city == x)
          this.listEmpty.splice(u, 1)
        }
      });      
      (this.listEmpty.length > 0)? this.searchBox = true : this.searchBox = false; 
    }
    else
    {
      this.searchBox = false;
      this.listEmpty = []
    }
  }

  goTo(city: string)
  {
    // Error
    this.globalService.setAddressValue(city);
    this.router.navigate([`${city}/restaurants`])
    this.location = this.mapPin = false;
    this.closePopUp();
  }

}
