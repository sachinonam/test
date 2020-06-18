import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

const routes: Routes = [
{ path: 'index', component: AppComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AmplifyUIAngularModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

