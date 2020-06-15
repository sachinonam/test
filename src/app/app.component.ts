import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';


//API.configure('GET');

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
    constructor( private amplifyService: AmplifyService,private router: Router ) {
		
		this.amplifyService.authStateChange$
			.subscribe(authState => {
				this.signedIn = authState.state === 'signedIn';
				if (!authState.user) {
					this.user = null;
				} else {
					this.user = authState.user;
					this.greeting = "Hello " + this.user.username;
					this.greeting = getData();	
					this.router.navigate(['/login']);
				}
			});
	}	

	
	

}


async function getData(){
	
const apiName = 'testthis';
const path = '/done'; 

const myInit = { // OPTIONAL
    headers: { 'Accept': 'application/json',
    			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin" : "*",
			  "Access-Control-Allow-Credentials" : true,
			  "Access-Control-Allow-Methods" :   "OPTIONS,GET"
			  }, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
	'responseType': 'text',
    queryStringParameters: {  // OPTIONAL
        "User_id": 10,
		"User_name": "xyzzzz",
		"Password": "Hello$12",
		"Email_address": "sujay@gmail.com"
    },
};
//return path;
return await API
  .get(apiName, path, myInit)
  .then(response => {
    // Add your code here
  })
  .catch(error => {
	  debugger;
	  return error
     console.log(error.message);
 });

 
}

