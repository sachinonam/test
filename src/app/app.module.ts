import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';


@NgModule({
declarations: [ AppComponent],
imports: [ BrowserModule, AppRoutingModule, AmplifyUIAngularModule],
providers: [AmplifyService],
bootstrap: [AppComponent]
})
export class AppModule { }
