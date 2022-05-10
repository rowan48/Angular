import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import {CoreModule} from "./core/core.module";
import {StudentModule} from "./student/student/student.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmentComponent,

  ],
  imports: [
    BrowserModule, CoreModule, StudentModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
