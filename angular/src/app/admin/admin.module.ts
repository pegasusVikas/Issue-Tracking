import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTableComponent } from './admin-table/admin-table.component';



@NgModule({
  declarations: [AdminHomeComponent, AdminTableComponent],
  imports: [
    CommonModule
  ],
  exports:[AdminHomeComponent,AdminTableComponent]
})
export class AdminModule { }
