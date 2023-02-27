import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  adressUser !: any;
  currentUser !: any;

  // get this data from database 
  adrs = [
    'cayenne',
    'sinnamary',
    'papaichton',
    'mana',
    'maripasoula',
    'camopi',
    'javouhey',
    'kourou',
    'cacao',
    'roura'
  ]

  constructor() { }

  getAllAdrs()
  {
    return this.adrs;
  }

  // Set address infos in localStorage
  setAddressValue(city: string)
  {
    this.adressUser = city; // update this value (use object to show more details)
    localStorage.setItem('user address',this.adressUser)
  }

  getAddressValue()
  {
    return localStorage.getItem('user address')
  }

  checkAdress(): boolean
  {
    return !!localStorage.getItem('user address');
  }
}
