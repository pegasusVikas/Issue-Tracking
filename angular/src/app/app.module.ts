import {CookieService} from 'ngx-cookie-service';
import { AddissueComponent } from './addissue/addissue.component';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {HttpClientModule} from '@angular/common/http'
import {DeveloperModule} from './developer/developer.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserComponent } from './user/user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AdminAuthGuard } from './authGuard/admin.auth.guard';
import { UserAuthGuard } from './authGuard/user.auth.guard';
import { DeveloperAuthGuard } from './authGuard/developer.auth.guard';
import { AuthenticateGuard } from './authGuard/authenticate.guard';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    AddissueComponent,
    NavigationBarComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    DeveloperModule,
    AdminModule
  ],
  providers: [CookieService,AdminAuthGuard,UserAuthGuard,DeveloperAuthGuard,AuthenticateGuard],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
