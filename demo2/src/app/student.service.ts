import { Injectable } from '@angular/core';
import {Student} from "./_models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
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
        if(this.students[index].id === id) this.students.splice(index,1);
      });

  }
  editStudent(id:number){
    //TODO:to be continued
  }
}
