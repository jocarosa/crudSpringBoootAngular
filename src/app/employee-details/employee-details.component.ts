import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public employeeService:EmployeeService,public router:Router,public route:ActivatedRoute ) { }

  employee: Observable<Employee>
  id:number;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getEmployeeDetails(this.id);
  }

  getEmployeeDetails(id:number){
    this.employeeService.getEmployeeDetails(id).subscribe(data=>{
      this.employee = data;
    },error=>{console.log(error)});
  }

}
