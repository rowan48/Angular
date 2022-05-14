import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";
import {ActivatedRoute} from "@angular/router";
declare var window: any;

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  formModal: any;
std:Student=new Student(-1,"rowan",23,2);
  students:Student[]=[];
  email:string="";
  constructor(public StudentService:StudentService,public ar:ActivatedRoute) { }
  ngOnInit(): void {
    this.students=this.StudentService.getAllStudents();
         this.addStudent();
  }
  addStudent(){
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    this.StudentService.addStudent(this.std);
    this.formModal.hide();
  }

}
