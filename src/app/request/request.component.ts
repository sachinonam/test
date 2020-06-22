import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import 'rxjs/add/operator/toPromise';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})

export class RequestComponent implements OnInit {
  title = "ReachOut";
	signedIn: boolean;
  user : any;
  greeting : string;
  getService: any;
  getCountry: any;

  constructor(private amplifyService: AmplifyService,private router: Router, public myapp: AppComponent) {
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
   this.getService = [{"Service_Name": "Parcel Collection"}, {"Service_Name": "Grocery"}, {"Service_Name": "Hospital Services"}, {"Service_Name": "Medical"}];
   this.getCountry = [{"Country_Name": "New York"}, {"Country_Name": "New Jersey"}, {"Country_Name": "South Carolina"}];
  }

  ngOnInit(): void {
  }

  @ViewChild('RequestType') RequestType: ElementRef;
  @ViewChild('BusinessName') BusinessName: ElementRef;
  @ViewChild('Address1') Address1: ElementRef;
  @ViewChild('Address2') Address2: ElementRef;
  @ViewChild('City') City: ElementRef;
  @ViewChild('Country') Country: ElementRef;
  @ViewChild('Zipcode') Zipcode: ElementRef;
  @ViewChild('Phone') Phone : ElementRef;
  @ViewChild('Description') Description : ElementRef;

  getHTMLAttributeValue(): any {
    const queryParameters = {
      "RequestType": this.RequestType.nativeElement.value,
      "BusinessName": this.BusinessName.nativeElement.value,
      "Address1": this.Address1.nativeElement.value,
      "Address2": this.Address2.nativeElement.value,
      "City": this.City.nativeElement.value,
      "Country": this.Country.nativeElement.value,
      "Zipcode": this.Zipcode.nativeElement.value,
      "Phone": this.Phone.nativeElement.value,
      "Description": this.Description.nativeElement.value,
      "Seeker": this.myapp.user.username
  }

  const res = userRequest(queryParameters);
  this.renderSeeker();
}
  renderSeeker(): any {
    this.router.navigate(['/seeker']);
  }
}
  async function userRequest(_param)
  {
    const apiName = 'testthis';
    console.log (_param);
     return await API.get(apiName, '/userrequest' , {
       headers: {'Content-Type': 'application/json', 'Authorization' : 'token'},
       queryStringParameters : _param,
      })
      .then(response => {
        console.log()
          return `async response.data`;
      })
      .catch(error => {
        return error
         console.log(error.message);
     });
  }
