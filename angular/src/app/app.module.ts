import { AdminModule } from './admin/admin.module';
import { AdmindevelopertableComponent } from './admin/admindevelopertable/admindevelopertable.component';
import { DeveloperTableComponent } from './developer/developer-table/developer-table.component';
import { DeveloperHomeComponent } from './developer/developer-home/developer-home.component';
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
import { AdmindeveloperComponent } from './admin/admindeveloper/admindeveloper.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    NavigationBarComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
