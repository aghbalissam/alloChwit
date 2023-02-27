import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import listRest from './categories';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  createDb()
  {
    let categories = listRest;
    return categories;
  }
  
}
