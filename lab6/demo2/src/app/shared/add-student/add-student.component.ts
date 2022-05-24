import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student:Student=new Student(1,"",18,0);

  constructor(public StudentService:StudentService) { }
  AddStudent(){
  console.log("list");
  this.StudentService.addStudent(this.student).subscribe(
    s=>console.log(s)
  );

}
  ngOnInit(): void {

  }

}
