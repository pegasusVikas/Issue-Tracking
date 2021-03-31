import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperHomeComponent } from './developer-home/developer-home.component';
import { DeveloperTableComponent } from './developer-table/developer-table.component';



@NgModule({
  declarations: [DeveloperHomeComponent, DeveloperTableComponent],
  imports: [
    CommonModule
  ],
  exports:[DeveloperTableComponent,DeveloperHomeComponent]

})
export class DeveloperModule { }
