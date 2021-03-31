import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {DeveloperHomeComponent} from './developer/developer-home/developer-home.component';
const routes: Routes =[
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"developer/home",component:DeveloperHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
