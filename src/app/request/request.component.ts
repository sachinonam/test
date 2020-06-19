import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import 'rxjs/add/operator/toPromise';
import Amplify, { Auth } from 'aws-amplify';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  title = "ReachOut";
	signedIn: boolean;
  user : any;
  greeting : string;
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

				}
			});
  }

  ngOnInit(): void {
  }

  renderSeeker(): any {
    userRequest();
    this.router.navigate(['/seeker']);
  }

}
  async function userRequest()
  {
    const apiName = 'testthis';
     return await API.get(apiName, '/userrequest' , { headers: {'Content-Type': 'application/json', 'Authorization' : 'token'}})
      .then(response => {
        debugger;
        console.log()
          return `async response.data`;
      })
      .catch(error => {
        debugger;
        return error
         console.log(error.message);
     });
    }
