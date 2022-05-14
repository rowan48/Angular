import { Injectable } from '@angular/core';
import {Student} from "./_models/student";
import {ActivatedRoute, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public ar:ActivatedRoute,public router:Router) {
  }

  private students: Student[] = [
    new Student(1, "aliaa-mostafa", 23, 2),
    new Student(2, "esraa-nouh", 23, 3),
    new Student(3, "hadeer-hussen", 23, 4)
  ];

  getAllStudents() {
    return this.students;
  }

  showStudent(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        return this.students[i];
      }
    }
    return null;
  }
  addStudent(std:Student){
    this.students.push(new Student(std.id,std.name,std.age,std.deptNumber));
  }
  deleteStudent(id: number){
      this.students.forEach((value,index)=>{
        if(this.students[index].id == id) this.students.splice(index,1);
      });
  }
  editStudent(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        return this.students[i];
      }
    }
    return null;
  }
  updateStudent(student:Student){
    for(let i =0; i<this.students.length;i++){
      if(this.students[i].id==student.id){
        this.students[i].id=student.id;
        this.students[i].name=student.name;
        this.students[i].age=student.age;
        this.students[i].deptNumber=student.deptNumber;

      }
    }

  }
}
