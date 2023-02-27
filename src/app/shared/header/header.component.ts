import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { GlobalService } from 'src/app/services/global.service';
import { AddressModalComponent } from '../components/modal/address-modal/address-modal.component';
import { UserAuthComponent } from '../components/modal/user-auth/user-auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../shared.scss','./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  accountSubMenu = false;
  cityAdress !:any;
  // options = ['rabat', 'casablanca', 'agadir', 'marrakech', 'tanger', 'fes'];
  options : any[] = [];


  constructor(
    private dialog : MatDialog,
    private authSrv : AuthentificationService,
    private router : Router,
    protected globalSrv : GlobalService // protected or private
    ) 
  {}

  ngOnInit(): void {
    this.cityAdress = this.globalSrv.checkAdress();
  }

  authPopUp()
  {
    if(this.authSrv.loggedIn())
    {
      // (this.accountSubMenu)?this.accountSubMenu = false: this.accountSubMenu = true;
      this.router.navigate(['/account'])
    }
    else
    {
      this.dialog.open(UserAuthComponent ,
      {
        width: '550px'
      })
    }
  }

  searchValue(term: string)
  {
    // if(term.length >= 2)
    // {
    //   this.options = ['rabat', 'casablanca', 'agadir', 'marrakech', 'tanger', 'fes'];
    //   console.log(this.options);
    // }
    this.router.navigate([`search/${term}`]);
  }

  // use service to open Modal
  getAdressModal()
  {
    this.dialog.open(AddressModalComponent ,
    {
      width: '800px'
    })
  }

} 
