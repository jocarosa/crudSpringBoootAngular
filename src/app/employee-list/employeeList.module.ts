import { NgModule } from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import { CommonModule } from '@angular/common';
import { EmployeeListRoutingModule } from './employeeListRouting.module';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule
    ]
})
export class EmployeeListModule { }
