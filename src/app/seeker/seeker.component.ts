import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import 'rxjs/add/operator/toPromise';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {
  title = "ReachOut";
	signedIn: boolean;
  user : any;
  greeting : string;
  activeSeeker: any;
  closedSeeker: any;
  cancelledSeeker: any;

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

      this.activeSeeker = [
        {"RequestType": "Food","City": "New York","Zipcode": "SC  29406-4829","Address1": "6650 Rivers Ave Ste 105","Country": "South Carolina","Address2": " North Charleston"},
        {"RequestType": "Grocery","City": "New York","Zipcode": "SC  29406-4829","Address1": "6650 Rivers Ave Ste 105","Country": "South Carolina","Address2": " North Charleston"}
    ];
    this.closedSeeker = [
      {"RequestType": "Hospital Service","City": "New York","Zipcode": "SC  29406-4829","Address1": "6650 Rivers Ave Ste 105","Country": "South Carolina","Address2": " North Charleston"}
    ];
  this.cancelledSeeker = [
    {"RequestType": "Parcel Collection","City": "New York","Zipcode": "SC  29406-4829","Address1": "6650 Rivers Ave Ste 105","Country": "South Carolina","Address2": " North Charleston"}
  ];
  }

  ngOnInit(): void {
  }

  renderRequest(): any {
    this.router.navigate(['/request']);
  }
}
