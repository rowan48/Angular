import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../_models/student";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(public StudentService:StudentService,public ar:ActivatedRoute ,private router: Router) {

  }
  std:Student=new Student(0,"",0,0);
  ngOnInit(): void {
    let id =-1;
    this.ar.params.subscribe(
      a=>{
        id=a['id'];
        this.StudentService.showStudent(id).subscribe(
          s=>this.std=s?? new Student(-1,"",18,2)
        )
      }
    )
  }
  updateStudent(student:Student){


    this.StudentService.updateStudent(student).subscribe(
      //s=>console.log(s)


    // router.navigate(['/list']);
        //[routerLink]="['/list']"

    )
    this.router.navigateByUrl('/list');

  }
}
