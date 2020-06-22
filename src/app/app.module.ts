import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { HelperComponent } from './helper/helper.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SeekerComponent } from './seeker/seeker.component';
import { RequestComponent } from './request/request.component';
import { AccountSettings } from './register1/register1.component';



@NgModule({
declarations: [ AppComponent, HelperComponent, RegisterComponent,LoginComponent, SeekerComponent, RequestComponent, AccountSettings],
imports: [ BrowserModule, AppRoutingModule, AmplifyUIAngularModule],
providers: [AmplifyService],
bootstrap: [AppComponent]
})
export class AppModule { }
