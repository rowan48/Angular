import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  constructor(public StudentService:StudentService ,public ar:ActivatedRoute,public router:Router) { }
  redirectToList(){
    this.router.navigateByUrl('/list');
  }
  ngOnInit(): void {
    // prompt("Are u sure")
    // if(prompt("Are u sure")=='ok'){
    //   console.log('ol');
    //   let id =-1;
    //   this.ar.params.subscribe(
    //     a=>{
    //       id=a['id'];
    //       this.StudentService.deleteStudent(id);
    //
    //       this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    //         this.router.navigate(['/list']);
    //       });         }
    //   )
    // }

  }
}
