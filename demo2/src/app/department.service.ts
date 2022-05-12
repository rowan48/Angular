import { Injectable } from '@angular/core';
import {Department} from "./_models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  department:Department=new Department(0,"Alex","IT");
  departments:Department[]=[
    new Department(1,"Cairo","OS"),
    new Department(2,"Fayoum","PD"),
    new Department(3,"SmartVillage","AI")
  ];
  addDepartment(dep:Department){
    this.departments.push(dep);
  }
  listDepartments(){
    return this.departments;
  }
  editDepartment(id:number){
    //TODO:to be continued
  }
  showDepartment(id:number){
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id === id) {
        return this.departments[i];
      }
    }
    return null;
  }
  deleteDepartment(id:number){
    this.departments.forEach((value,index)=>{
      if(this.departments[index].id === id) this.departments.splice(index,1);
    });
  }
}
