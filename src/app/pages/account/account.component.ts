import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userInfos !: any;
  passwordType : string = 'password';
  classEye : string = 'fa-solid fa-eye';
  compPass = false;
  compProf = true;
  active = 'top';

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userInfos = JSON.parse(localStorage.getItem('user') as string);
    console.log('User infos =>', this.userInfos );
  }

  changePswTy()
  {
    (this.passwordType == 'password') ? this.passwordType = 'text' :this.passwordType = 'password';
    (this.classEye == 'fa-solid fa-eye') ? this.classEye = 'fa-sharp fa-solid fa-eye-slash' :this.classEye = 'fa-solid fa-eye';
  }

  logOut()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  showComp(comp: string)
  {
    // customize this code
    if(comp == 'profile')
    {
      this.compProf = true;
      this.compPass = false;
    }
    else
    {
      this.compPass = true;
      this.compProf = false;
    }
  }

}

