import { AddissueComponent } from './addissue/addissue.component';
import { UserComponent } from './user/user.component';
import { AdmindevelopertableComponent } from './admin/admindevelopertable/admindevelopertable.component';
import { AdminModule } from './admin/admin.module';
import { AdmindeveloperComponent } from './admin/admindeveloper/admindeveloper.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {DeveloperHomeComponent} from './developer/developer-home/developer-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminAuthGuard } from './authGuard/admin.auth.guard';
import { UserAuthGuard } from './authGuard/user.auth.guard';
import { DeveloperAuthGuard } from './authGuard/developer.auth.guard';
import { AuthenticateGuard } from './authGuard/authenticate.guard';

const routes: Routes =[
  {path:"",redirectTo:"signin",pathMatch:"full"},
  {path:"signin",canActivate:[AuthenticateGuard],component:SignInComponent},
  {path:"signup", canActivate:[AuthenticateGuard],component:SignUpComponent},
  {path:"developer/home", canActivate:[DeveloperAuthGuard] ,component:DeveloperHomeComponent},
  {path:"admin/home",canActivate:[AdminAuthGuard],component:AdminHomeComponent},
  {path:"admin/developer",canActivate:[AdminAuthGuard],component:AdmindeveloperComponent},
  {path:"user/home", canActivate:[UserAuthGuard],component:UserComponent},
  {path:"user/addIssue", canActivate:[UserAuthGuard], component:AddissueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
