import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
  title = "ReachOut";
	signedIn: boolean;
  user : any;
  greeting : string;
  acceptHelper: any;
  openHelper: any;
  closedHelper: any;

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

      this.acceptHelper = [
        {"RequestType": "Parcel Collection","City": "New york","Zipcode": "E658NG","Address1": "1 NewYork Lane","Country": "USA","Address2": ""}
    ];
    this.openHelper = [
      {"RequestType": "Food","City": "New York","Zipcode": "SC  29406-4829","Address1": "6650 Rivers Ave Ste 105","Country": "South Carolina","Address2": " North Charleston"},
      {"RequestType": "Grocery","City": "New york","Zipcode": "E658NG","Address1": "1 NewYork Lane","Country": "USA","Address2": ""}
    ];
  this.closedHelper = [
    {"RequestType": "Hospital Services","City": "New York","Zipcode": "SC  29406-4829","Address1": "6650 Rivers Ave Ste 105","Country": "South Carolina","Address2": " North Charleston"}
    ];
  }

  ngOnInit(): void {
  }

}
