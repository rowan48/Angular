import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import {FormsModule, NG_VALIDATORS} from "@angular/forms";
import {ListDepartmentsComponent} from "../list-departments/list-departments.component";
import {AddDepartmentComponent} from "../add-department/add-department.component";
import {EditDepartmentComponent} from "../edit-department/edit-department.component";
import {DeleteDepartmentComponent} from "../delete-department/delete-department.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



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
    CommonModule,FormsModule,RouterModule,AppRoutingModule,BrowserModule,
    CustomFormsModule
    ],exports:[
    ListStudentsComponent,AddStudentComponent,EditStudentComponent,DeleteStudentComponent,ListDepartmentsComponent,AddDepartmentComponent,EditDepartmentComponent,
    DeleteDepartmentComponent
  ], providers: [
    HttpClientModule,HttpClient // should add here
  ]
})
export class SharedModule { }
