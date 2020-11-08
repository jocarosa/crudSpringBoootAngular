import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRoutingModule } from './updateEmployeeRouting.module';

@NgModule({
  declarations: [UpdateEmployeeComponent],
  imports: [CommonModule,UpdateEmployeeRoutingModule,FormsModule],
})
export class UpdateEmployeeModule { }
