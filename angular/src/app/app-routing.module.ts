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

const routes: Routes =[
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"developer/home",component:DeveloperHomeComponent},
  {path:"admin/home",component:AdminHomeComponent},
  {path:"admin/developer",component:AdmindeveloperComponent},
  {path:"user/home",component:UserComponent},
  {path:"user/addIssue",component:AddissueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
