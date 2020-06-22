import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import Amplify, { Auth } from 'aws-amplify';
import { FormFieldTypes } from '@aws-amplify/ui-components';

Amplify.configure({
	API: {
	  endpoints: [
		{
		  name: "testthis",
		  endpoint: "https://idaaf5mauf.execute-api.us-east-2.amazonaws.com/dev",
		  custom_header: async () => {
			return { Authorization : 'token' }
		  }
		},
		{
			name: "get_requests_API",
			endpoint: "https://g54vqgfui5.execute-api.us-east-2.amazonaws.com/requests",
			custom_header: async () => {
			  return { Authorization : 'token' }
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
			  placeholder: "Enter your email address",
			  required: true,
			},
			{
			  type: "password",
			  label: "Password",
			  placeholder: "Enter your password",
			  required: true,
			},
			{
			  type: "phone_number",
			  label: "Custom Phone Label",
			  placeholder: "Enter your Phone Number",
			  required: false,
			},
		];
		this.amplifyService.authStateChange$
			.subscribe(authState => {
				this.signedIn = authState.state === 'signIn';
				if (!authState.user) {
					this.user = null;
				} else {
					this.user = authState.user;
					this.greeting = "Hello " + this.user.username;
					this.router.navigate(['/login']);
				}
			});
}
}

async function getData(){

const apiName = 'testthis';
const path = '/done';
str1 :  '';
const myInit = {

		headers: {
			Authorization: `Bearer ${( await Auth.currentSession()).getIdToken().getJwtToken()}`,
		  },};

  await API.post(apiName, path , myInit)
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
