import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {ListStudentsComponent} from "../shared/list-students/list-students.component";
import {AddStudentComponent} from "../shared/add-student/add-student.component";
import {DeleteStudentComponent} from "../shared/delete-student/delete-student.component";
import {EditStudentComponent} from "../shared/edit-student/edit-student.component";
import {NotFoundComponent} from "../not-found/not-found.component";

const routes:Routes=[
  {path:"list",component:ListStudentsComponent,
  children:[
    {path:"delete/:id",component:DeleteStudentComponent},
  ]},
  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"add",component:AddStudentComponent},
  {path:"edit/:id",component:EditStudentComponent},
  {path:"**",component:NotFoundComponent},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes),
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
