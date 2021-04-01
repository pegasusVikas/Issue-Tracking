import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindeveloperComponent } from './admindeveloper/admindeveloper.component';
import { AdmindevelopertableComponent } from './admindevelopertable/admindevelopertable.component';

@NgModule({
  declarations: [AdmindeveloperComponent, AdmindevelopertableComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
