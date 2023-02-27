import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})

export class UserAuthComponent implements OnInit {
  
  userIn : boolean = false;
  userUp : boolean = true;
  operation : string = "Inscription";

  constructor( ) { }

  ngOnInit(): void {}

  showBox(val: string)
  {
    // Optimize this Code [ Use the Object operation ] 
    if(val == 'up')
    {
      this.userIn = false;
      this.userUp = true;
      this.operation = "Inscription"
    }
    else
    {
      this.userIn = true;
      this.userUp = false;
      this.operation = "Connexion"
    }
  }

}
