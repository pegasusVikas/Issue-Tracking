import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdmindeveloperComponent } from './admindeveloper/admindeveloper.component';
import { AdmindevelopertableComponent } from './admindevelopertable/admindevelopertable.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AdminHomeComponent, AdminTableComponent,AdmindeveloperComponent, AdmindevelopertableComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[AdminHomeComponent,AdminTableComponent]
})

export class AdminModule { }
