import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { CharactersComponent } from './_components/characters/characters.component';
import { StudentsComponent } from './_components/students/students.component';
import { StaffComponent } from './_components/staff/staff.component';
import { TableComponent } from './_components/table/table.component';
import { AddStudentComponent } from './_components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    StudentsComponent,
    StaffComponent,
    TableComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
