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
			// Alternatively, with Cognito User Pools use this:
			// return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
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
  

export class Register1Component implements OnInit {
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
        //this.greeting = getData();	
        //this.router.navigate(['../']);
      }
    });
	
	
	this.users = [{
    "RequestType": "Food",
    "City": "",
    "Zipcode": "SC  29406-4829",
    "Address1": "6650 Rivers Ave Ste 105",
    "Country": "South Carolina",
    "Address2": " North Charleston"
  },
  {
    "RequestType": "Grocery",
    "City": "New york",
    "Zipcode": "100602",
    "Address1": "96 Mellish Steet",
    "Country": "New York",
    "Address2": ""
  },
  {
    "RequestType": "Grocery",
    "City": "New york",
    "Zipcode": "E658NG",
    "Address1": "1 NewYork Lane",
    "Country": "USA",
    "Address2": ""
  }
]
    
   }

  ngOnInit(): void {
  }

    @ViewChild('First_Name') First_Name: ElementRef;
    @ViewChild('Last_Name') Last_Name: ElementRef;
    @ViewChild('zip_code') zip_code: ElementRef;
    @ViewChild('city') city: ElementRef;
    @ViewChild('state_name') state_name: ElementRef;
    @ViewChild('services') services: ElementRef;
    @ViewChild('Address_1') Address_1: ElementRef;
    @ViewChild('Address_2') Address_2 : ElementRef;
    @ViewChild('user_type') user_type : ElementRef;
   getHTMLAttributeValue(): any {
  //console.warn('HTML attribute value: ' + this.First_Name.nativeElement.value + this.Last_Name.nativeElement.value + this.Address_1.nativeElement.value + this.Address_2.nativeElement.value + this.services.nativeElement.value + this.city.nativeElement.value + this.zip_code.nativeElement.value + this.user_type.nativeElement.value);
  //authState.user
  const queryParameters = {  // OPTIONAL
    "First_Name": this.First_Name.nativeElement.value,
    "Last_Name": this.Last_Name.nativeElement.value,
    "zip_code": this.zip_code.nativeElement.value,
    "City": this.city.nativeElement.value,
    "services": this.services.nativeElement.value,
    "Address_1": this.Address_1.nativeElement.value,
    "Address_2": this.Address_2.nativeElement.value,
    "user_type": this.user_type.nativeElement.value,
    "user_name": this.myapp.user.username,
}
Auth.currentUserInfo();
debugger;
   console.log(Auth.currentUserInfo());

   
  const res = getData(queryParameters);

  console.log(res);
	
  debugger;
  this.router.navigate(['./register1',[this.users]]);
  }

  getCancel(): any {
    this.router.navigate(['../']);
  }
}




async function getData(queryParameters){
	
  const apiName = 'testthis';
  const path = '/done'; 
  str1 :  '';
  const myInit = { // OPTIONAL
     
      headers: { 
        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
  //"Access-Control-Allow-Origin": "*",
    //    		"Access-Control-Allow-Credentials": true
        },
       response: false, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: queryParameters,
  };
  //this.str1 = `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
  
  debugger;
  //return path;
  
  const promise = API.get('testthis', path , myInit)
  .then(response => {
    //console.log(response)
    return response.data;
       //return `async response.data`;
   })
   .catch(error => {
 	  debugger;
 	  //return error
      console.log(error.message);
  });
  try {
    await promise;
    
    //return promise;
  } catch (error) {
    console.log(error);
    // If the error is because the request was cancelled we can confirm here.
    }
   
   debugger;
  }
  
  

  