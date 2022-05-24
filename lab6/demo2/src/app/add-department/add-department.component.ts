import { Component, OnInit } from '@angular/core';
import {Department} from "../_models/department";
import {DepartmentService} from "../department.service";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  department:Department=new Department(1,"","",);

  constructor(public DepartmentService:DepartmentService ) { }

  ngOnInit(): void {
  }
  AddDepartment(){
    this.DepartmentService.addDepartment(this.department);
  }

}
