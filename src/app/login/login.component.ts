import { Component, OnInit } from '@angular/core';
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
		  endpoint: "https://g54vqgfui5.execute-api.us-east-2.amazonaws.com/requests/get-requests",
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
  selector: 'app-login',
  templateUrl: './Seekerhomepage.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = "hello";
	signedIn: boolean;
	user : any;
	greeting: string;
    constructor( private amplifyService: AmplifyService,private router: Router ) {
		
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

}
