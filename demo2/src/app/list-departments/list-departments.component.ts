import { Component, OnInit } from '@angular/core';
import {Department} from "../_models/department";
import {DepartmentService} from "../department.service";

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {
departments:Department[]=[];
  constructor(public DepartmentService:DepartmentService) { }

  ngOnInit(): void {
    this.departments=this.DepartmentService.listDepartments();
  }

}
