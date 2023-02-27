import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userEmail !: string;
  userPassword !: string;

  constructor(
    private authSrv: AuthentificationService,
    private router: Router,
    private dialog: MatDialog,
    private globalSrv : GlobalService
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    // use form

    this.authSrv.loginUser({
      'email': this.userEmail,
      'password': this.userPassword
    }).subscribe( (res: any) =>
      {
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(res.u))
        this.router.navigate(['']); // add direction
        this.dialog.closeAll();
      }
    )
    
  }

}
