import { Injectable } from '@angular/core';
import {Student} from "./_models/student";
import {ActivatedRoute, Router} from "@angular/router";
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "http://localhost:8080/students/";

  constructor(public ar:ActivatedRoute,public router:Router, public http: HttpClient) {
  }

  private students: Student[] = [];

  getAllStudents() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  showStudent(id: number) {
    // for (let i = 0; i < this.students.length; i++) {
    //   if (this.students[i].id === id) {
    //     return this.students[i];
    //   }
    // }
    // return null;
    return this.http.get<Student>(this.baseUrl+id);
  }
  addStudent(std:Student){
    console.log(std) ;   // this.students.push(new Student(std.id,std.name,std.age,std.deptNumber));
    return this.http.post(this.baseUrl,std);
  }
  deleteStudent(id: number){
      // this.students.forEach((value,index)=>{
      //   if(this.students[index].id == id) this.students.splice(index,1);
      // });
      return this.http.delete(this.baseUrl+id);
  }
  // editStudent(id:number){
  //   for (let i = 0; i < this.students.length; i++) {
  //     if (this.students[i].id == id) {
  //       return this.students[i];
  //     }
  //   }
  //   return null;
  // }
  updateStudent(student:Student){
  //   for(let i =0; i<this.students.length;i++){
  //     if(this.students[i].id==student.id){
  //       this.students[i].id=student.id;
  //       this.students[i].name=student.name;
  //       this.students[i].age=student.age;
  //       this.students[i].deptNumber=student.deptNumber;

  //     }
  //   }
  return this.http.put(this.baseUrl+student._id,student);
   }
}
