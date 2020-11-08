import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsEmployeeRoutingModule } from './detailsEmployeeRouting.module';
import { EmployeeDetailsComponent } from './employee-details.component';

@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [CommonModule,DetailsEmployeeRoutingModule],
})
export class DetailsEmployeeModule { }
