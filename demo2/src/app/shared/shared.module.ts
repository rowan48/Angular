import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import {FormsModule} from "@angular/forms";
import {ListDepartmentsComponent} from "../list-departments/list-departments.component";
import {AddDepartmentComponent} from "../add-department/add-department.component";
import {EditDepartmentComponent} from "../edit-department/edit-department.component";
import {DeleteDepartmentComponent} from "../delete-department/delete-department.component";



@NgModule({
  declarations: [
    ListStudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    ListDepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent,
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[
    ListStudentsComponent,AddStudentComponent,EditStudentComponent,DeleteStudentComponent,ListDepartmentsComponent,AddDepartmentComponent,EditDepartmentComponent,
    DeleteDepartmentComponent
  ]
})
export class SharedModule { }
