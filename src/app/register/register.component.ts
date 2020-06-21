import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import API from '@aws-amplify/api';
import {enableProdMode} from '@angular/core';
import 'rxjs/add/operator/toPromise';
//import Amplify, { Auth } from 'aws-amplify';


/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private router: Router) { }

    @ViewChild('bindingInput') bindingInput: ElementRef;
    getHTMLAttributeValue(): any {
      console.warn('HTML attribute value: ' + this.bindingInput.nativeElement.getAttribute('value'));
      this.router.navigate(['../']);
    }



  ngOnInit(): void {
  }

}



