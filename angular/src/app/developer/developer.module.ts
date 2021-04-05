import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperHomeComponent } from './developer-home/developer-home.component';
import { DeveloperTableComponent } from './developer-table/developer-table.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DeveloperHomeComponent, DeveloperTableComponent],
  imports: [
    CommonModule,MatIconModule
  ],
  exports:[DeveloperTableComponent,DeveloperHomeComponent]

})
export class DeveloperModule { }
