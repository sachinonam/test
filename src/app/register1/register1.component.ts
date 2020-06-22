import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import Amplify, { Auth } from 'aws-amplify';
import {AppComponent} from '../app.component';

Amplify.configure({
	API: {
	  endpoints: [
		{
		  name: "testthis",
		  endpoint: "https://idaaf5mauf.execute-api.us-east-2.amazonaws.com/dev",
		  custom_header: async () => {
			return { Authorization : 'token' }
		  }
		}
	  ]
	}
  });

   @Component({
    selector: 'app-register1',
    templateUrl: './register1.component.html',
    styleUrls: ['./register1.component.css']
  })


export class AccountSettings implements OnInit {
  signedIn: boolean;
  user : any;
  greeting: any;
  users : any;

  constructor(private amplifyService: AmplifyService,private router: Router,public myapp: AppComponent) {

    this.amplifyService.authStateChange$
    .subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
        this.router.navigate(['../']);
      } else {
        this.user = authState.user;
        this.greeting = "Hello " + this.user.username;
      }
    });
   }

  ngOnInit(): void {
  }

    @ViewChild('First_Name') First_Name: ElementRef;
    @ViewChild('Last_Name') Last_Name: ElementRef;
    @ViewChild('zip_code') zip_code: ElementRef;
    @ViewChild('city') city: ElementRef;
    @ViewChild('Address_1') state_name: ElementRef;
    @ViewChild('Address_1') Address_1: ElementRef;
    @ViewChild('Address_2') Address_2 : ElementRef;
   getHTMLAttributeValue(): any {

  const queryParameters = {
    "First_Name": this.First_Name.nativeElement.value,
    "Last_Name": this.Last_Name.nativeElement.value,
    "zip_code": this.zip_code.nativeElement.value,
    "City": this.city.nativeElement.value,
    "state_name": this.state_name.nativeElement.value,
    "Address_1": this.Address_1.nativeElement.value,
    "Address_2": this.Address_2.nativeElement.value,
    "user_name": this.myapp.user.username,
}
Auth.currentUserInfo();
debugger;
   console.log(Auth.currentUserInfo());
  const res = getData(queryParameters);
  console.log(res);
  debugger;
  this.router.navigate(['../login']);
  }
  getCancel(): any {
    this.router.navigate(['../login']);
  }
}

async function getData(queryParameters)
{
  const apiName = 'testthis';
  const path = '/done';
  str1 :  '';
  const myInit = {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
       response: false,
    queryStringParameters: queryParameters,
  };
  debugger;

  const promise = API.get('testthis', path , myInit)
  .then(response => {
    return response.data;
   })
   .catch(error => {
 	  debugger;
      console.log(error.message);
  });
  try {
    await promise;
      }
  catch (error) {
    console.log(error);
    }
   debugger;
  }
