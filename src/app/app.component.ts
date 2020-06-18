import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import Amplify, { Auth } from 'aws-amplify';
import { FormFieldTypes } from '@aws-amplify/ui-components';


//API.configure('GET');

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = "hello";
	signedIn: boolean;
	user : any;
	greeting: any;
	formFields: FormFieldTypes;
    constructor( private amplifyService: AmplifyService,private router: Router ) {
		
		this.formFields = [
			{
			  type: "email",
			  label: "Email",
			  placeholder: "custom email placeholder",
			  required: true,
			},
			{
			  type: "password",
			  label: "Password",
			  placeholder: "custom password placeholder",
			  required: true,
			},
			{
			  type: "phone_number",
			  label: "Custom Phone Label",
			  placeholder: "custom Phone placeholder",
			  required: false,
			},
		];



		this.amplifyService.authStateChange$
		.subscribe(authState => {
			this.signedIn = authState.state === 'SignUp';
			if (!authState.user) {
				this.user = null;
			} else {
				this.user = authState.user;
				this.greeting = "Hello " + this.user.username;
				this.greeting = getData();	
				this.router.navigate(['/seeker']);
			}
		});
		
		this.amplifyService.authStateChange$
			.subscribe(authState => {
				this.signedIn = authState.state === 'signIn';
				if (!authState.user) {
					this.user = null;
				} else {
					this.user = authState.user;
					this.greeting = "Hello " + this.user.username;
					this.greeting = getData();	
					this.router.navigate(['/register']);
				}
			});

		
			
		
	
}	

	
	

}


async function getData(){
	
const apiName = 'testthis';
const path = '/done'; 
str1 :  '';
const myInit = { // OPTIONAL
   
		headers: { 
			Authorization: `Bearer ${( await Auth.currentSession()).getIdToken().getJwtToken()}`,
//"Access-Control-Allow-Origin": "*",
  //    		"Access-Control-Allow-Credentials": true
		  },
		
		
  
};
//this.str1 = `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`


//return path;
 return await API.get(apiName, path , myInit)
  .then(response => {
	  console.log()
      return `async response.data`;
  })
  .catch(error => {
	  debugger;
	  return error
     console.log(error.message);
 });

 
}

