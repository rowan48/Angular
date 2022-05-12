import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students:Student[]=[];
  constructor(public StudentService:StudentService) { }


  ngOnInit(): void {
    this.students=this.StudentService.getAllStudents();

  }

}
