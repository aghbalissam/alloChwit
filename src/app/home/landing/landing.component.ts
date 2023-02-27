import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { GlobalService } from 'src/app/services/global.service';
import { AddressModalComponent } from 'src/app/shared/components/modal/address-modal/address-modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../../shared/shared.scss','./landing.component.scss']
})
export class LandingComponent implements OnInit {

  rests = this.dataService.listRestaurants;

  meilleuresCat = [
    "Burgers",
    "Sandwichs",
    "Pizza",
    "Tacos",
    "Asiatique",
    "Pâtes",
    "Italien"
  ]
  
  // From database 
  Opportunites = [
    {
      title :'Emploi',
      image : 'https://images.pexels.com/photos/3338672/pexels-photo-3338672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      shortDescription : `Vous cherchez un nouveau défi ?
      Si vous faites preuve d'ambition et d'humilité
      et aimez travailler en équipe, contactez-nous !`,
      link : ''
    },
    {
      title :'Devenir partenaire',
      image : 'https://images.pexels.com/photos/8276360/pexels-photo-8276360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      shortDescription : `Grandissez avec Allo chwit !
      Boostez les ventes et accédez à de nouvelles
      opportunités grâce à notre technologie et
      à notre base d'utilisateurs !`,
      link : ''
    },
    {
      title :'Devenir coursier',
      image : 'https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      shortDescription : `C'est vous le chef ! Livrez avec Allo chwit
      pour gagner des revenus compétitifs
      en toute flexibilité et liberté.`,
      link : ''
    }
  ]

  constructor(
    private dataService : DataService,
    private router : Router,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  getAdressModal()
  {
    this.dialog.open(AddressModalComponent ,
    {
      width: '800px'
    })
  }

  goto(city: string,slogan: string)
  {
    this.router.navigate([`/${city}/restaurants/${slogan}`])
  }



}
