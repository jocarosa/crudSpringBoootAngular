import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"employees",pathMatch:"full"},
  {path:'employees',loadChildren:()=> import('./employee-list/employeeList.module').then(m=>m.EmployeeListModule)},
  {path:'add',loadChildren:()=> import('./create-employee/createEmployeeModule.module').then(m=>m.CreateEmployeeModule)},
  {path:'update/:id',loadChildren:()=> import('./update-employee/updateEmployeeModule.module').then(m=>m.UpdateEmployeeModule)},
  {path:'details/:id',loadChildren:()=> import('./employee-details/detailsEmployeeModule.module').then(m=>m.DetailsEmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
