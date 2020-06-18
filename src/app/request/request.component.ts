import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';


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
    this.router.navigate(['/seeker']);
  }
}
