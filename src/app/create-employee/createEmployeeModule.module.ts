import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeRoutingModule } from './createEmployeeRouting.module';
import { CreateEmployeeComponent } from './create-employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [CommonModule,CreateEmployeeRoutingModule,FormsModule],
})
export class CreateEmployeeModule { }
