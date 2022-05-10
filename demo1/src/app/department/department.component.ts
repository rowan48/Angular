import { Component, OnInit } from '@angular/core';
import {Department} from "../Model/department";
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShown: boolean = false ;
  isEdited: boolean = false ;
  department:Department=new Department(0,"Alex","IT");
  departments:Department[]=[
    new Department(1,"Cairo","OS"),
    new Department(2,"Fayoum","PD"),
    new Department(3,"SmartVillage","AI")
  ];
  dpt:Department=new Department(0,"","");
  showdep:Department=new Department(0,"rowan","");
  addDepartment(){
    this.departments.push(new Department(this.dpt.id,this.dpt.location,this.dpt.deptName));
    this.dpt.id=0;
    this.dpt.location="";
    this.dpt.deptName="";
  }
  showDepartment(id:string,location:string,depname:string){
    this.isShown = true;
    this.isEdited=false;
    this.showdep.id=Number(id);
    this.showdep.location=location;
    this.showdep.deptName=depname;
  }
  deleteDepartment(id:string,i:number) {
    this.isEdited=false;
    this.isShown = false;
    let depid = Number(id);
    for(let i =0; i<this.departments.length;i++){
      if(this.departments[i].id===depid){
        this.departments.splice(i, 1);
      }
    }
  }

  editDepartment(id:string,location:string,depname:string){
    this.isEdited=true;
    this.isShown = false;
    this.dpt.id=Number(id);
    this.dpt.location=location;
    this.dpt.deptName=depname;
  }
  updateDepartment(){
    this.isEdited=true;
    this.isShown = false;
    for(let i =0; i<this.departments.length;i++){
      if(this.departments[i].id===this.dpt.id){
        this.departments[i].id=this.dpt.id;
        this.departments[i].location=this.dpt.location;
        this.departments[i].deptName=this.dpt.deptName;
      }
    }
   }

}
