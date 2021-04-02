import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdmindeveloperComponent } from './admindeveloper/admindeveloper.component';
import { AdmindevelopertableComponent } from './admindevelopertable/admindevelopertable.component';


@NgModule({
  declarations: [AdminHomeComponent, AdminTableComponent,AdmindeveloperComponent, AdmindevelopertableComponent],
  imports: [
    CommonModule
  ],
  exports:[AdminHomeComponent,AdminTableComponent]
})

export class AdminModule { }
