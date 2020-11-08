import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,public employeeService: EmployeeService,
    public route:Router) { }
  
id:number;
employee:Employee;
errorMessage:string;  

ngOnInit() {
  this.employee =  new Employee();
    this.id= this.activatedRoute.snapshot.params["id"];
     this.getEmployeeDetails(this.id);
   
  }

  getEmployeeDetails(id:number){
    this.employeeService.getEmployeeDetails(id).subscribe(data=>{
      this.employee = data;
      console.log(this.employee);
    },error=>{
      this.errorMessage = error.error.message;
      console.log(error)
    });
  }

  update(){
    this.employeeService.updateEmployee(this.employee.id,this.employee).subscribe(data=>{
      console.log(data);
      this.route.navigate(["/details",this.employee.id]);
    },error=>{
      console.log(error);
    });
  }

}
