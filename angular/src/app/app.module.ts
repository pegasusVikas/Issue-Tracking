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
import { TableactComponent } from './tableact/tableact.component';
import { TablesolComponent } from './tablesol/tablesol.component';
import { AddissueComponent } from './addissue/addissue.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    NavigationBarComponent,
    UserComponent,
    TableactComponent,
    TablesolComponent,
    AddissueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    DeveloperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
