import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  signedIn: boolean;
  user : any;
  greeting: any;
  constructor(private amplifyService: AmplifyService,private router: Router) {
   
    this.amplifyService.authStateChange$
    .subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
        this.router.navigate(['../']);
      } else {
        this.user = authState.user;
        this.greeting = "Hello " + this.user.username;
        //this.greeting = getData();	
        //this.router.navigate(['../']);
      }
    });


   }

  ngOnInit(): void {
  }

}
