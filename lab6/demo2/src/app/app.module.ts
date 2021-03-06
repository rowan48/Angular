import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,AppRoutingModule,SharedModule,HttpClientModule,SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
