import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { RegisterComponent } from '../register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

const routes: Routes = [
{ path: 'index', component: AppComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AmplifyUIAngularModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

