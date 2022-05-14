import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";
import {ActivatedRoute} from "@angular/router";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
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
    console.log(this.students);
         this.addStudent();
  }
  deleteStudent(id:number){
    // if(prompt("Are u sure")=='ok'){
    //   console.log('ol');
    //   let id =-1;
    //   this.ar.params.subscribe(
    //     a=>{
    //       id=a['id'];
          this.StudentService.deleteStudent(id);
    //
    //       // this.redirectToList();
    //     }
    //   )
    //
    //
    // }

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
    // confirm or save something
    this.StudentService.addStudent(this.std);
    this.formModal.hide();
  }

}
