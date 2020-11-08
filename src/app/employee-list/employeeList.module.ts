import { NgModule } from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import { CommonModule } from '@angular/common';
import { EmployeeListRoutingModule } from './employeeListRouting.module';

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [CommonModule,EmployeeListRoutingModule]
})
export class EmployeeListModule { }
