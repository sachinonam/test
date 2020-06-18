import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Register1Component } from './register1/register1.component';


const routes: Routes = [
{ path: 'seeker', component: LoginComponent },
  { path: 'register', component: Register1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

