import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }
  from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import {CoreModule} from "./core/core.module";
import {StudentModule} from "./student/student/student.module";
import {FormsModule} from "@angular/forms";
import { PowerToxPipe } from './power-tox.pipe';
import { StringFilterPipe } from './string-filter.pipe';
import { ArraysComponent } from './arrays/arrays.component';
import {CalendarModule} from 'primeng/calendar';
import { RatingModule } from "primeng/rating";



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmentComponent,
    PowerToxPipe,
    StringFilterPipe,
    ArraysComponent,


  ],
  imports: [
    BrowserModule, CoreModule, StudentModule, FormsModule, CalendarModule, BrowserAnimationsModule, RatingModule, FormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
