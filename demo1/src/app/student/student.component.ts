import { Component, OnInit } from '@angular/core';
import {Student} from "../Model/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor() {
  }
   ngOnInit(): void {
  }
  value: Date=new Date();
  isShown: boolean = false ;
  isEdited: boolean = false ;
  student:Student=new Student(0,"edit",0,0,1,1);
   stds:Student[]=[
    new Student(1,"aliaa-mostafa",23,2,1,2),
    new Student(2,"esraa-nouh",23,3,3,4),
    new Student(3,"hadeer-hussen",23,4,5,7)
  ];
   std:Student=new Student(0,"",0,0,9,10);
   showstudent:Student=new Student(0,"rowan",0,0,20,30);
  addStudent(){
    this.stds.push(new Student(this.std.id,this.std.name,this.std.age,this.std.deptNumber,this.std.x,this.std.y))
    this.std.id=0;
    this.std.name="";
    this.std.age=0;
    this.std.deptNumber=0;
    this.std.x=1;
    this.std.y=1;
  }
  showStudent(id:string,name:string,age:string,deptno:string){
    this.isShown = true;
    this.isEdited=false;
    this.showstudent.id=Number(id);
    this.showstudent.name=name;
    this.showstudent.age=Number(age);
    this.showstudent.deptNumber=Number(deptno);
  }
  deleteStudent(id:string,i:number) {
    this.isEdited=false;
    this.isShown = false;
    let stdid = Number(id);
    for(let i =0; i<this.stds.length;i++){
    if(this.stds[i].id===stdid){
    this.stds.splice(i, 1);
  }
  }
  }

  editStudent(id:string,name:string,age:string,deptno:string){
    this.isEdited=true;
    this.isShown = false;
    this.student.id=Number(id);
    this.student.name=name;
    this.student.age=Number(age);
    this.student.deptNumber=Number(deptno);
  }

updateStudent(){
  this.isEdited=true;
  this.isShown = false;
  for(let i =0; i<this.stds.length;i++){
    if(this.stds[i].id===this.student.id){
      this.stds[i].id=this.student.id;
      this.stds[i].name=this.student.name;
      this.stds[i].age=this.student.age;
      this.stds[i].deptNumber=this.student.deptNumber;

    }
  }
}
}
