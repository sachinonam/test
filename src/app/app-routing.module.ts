import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SeekerComponent } from './seeker/seeker.component';
import { HelperComponent } from './helper/helper.component';
import { RequestComponent } from './request/request.component';
import { AccountSettings } from './register1/register1.component';



const routes: Routes = [
{ path: 'seeker', component: SeekerComponent },
{ path: 'helper', component: HelperComponent },
{ path: 'login', component: LoginComponent },
{ path: 'request', component: RequestComponent},
{ path: 'AccountSettings', component: AccountSettings}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

