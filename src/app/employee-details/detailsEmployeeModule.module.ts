import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsEmployeeRoutingModule } from './detailsEmployeeRouting.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [CommonModule,DetailsEmployeeRoutingModule,MatTableModule],
})
export class DetailsEmployeeModule { }
