import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

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
