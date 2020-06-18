import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { HelperComponent } from './helper/helper.component';
import { Register1Component } from './register1/register1.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SeekerhomeComponent } from './seekerhome/seekerhome.component';



@NgModule({
declarations: [ AppComponent, HelperComponent, Register1Component,RegisterComponent,LoginComponent, SeekerhomeComponent],
imports: [ BrowserModule, AppRoutingModule, AmplifyUIAngularModule],
providers: [AmplifyService],
bootstrap: [AppComponent]
})
export class AppModule { }
