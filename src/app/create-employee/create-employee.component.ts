import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { getBootstrapListener } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService,public router:Router) { }
  
  employee:Employee = new Employee();
  submitted:boolean;

  ngOnInit() {
    this.submitted =false;
  }

  onSubmit(){
    this.submitted =true;
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToList();
    });
  }
  goToList(){
    this.router.navigate(["/employees"]);
  }
}
