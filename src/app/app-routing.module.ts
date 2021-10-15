import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './_components/home/home.component';
import { CharactersComponent } from '@app/_components/characters/characters.component';
import { StaffComponent } from '@app/_components/staff/staff.component';
import { StudentsComponent } from '@app/_components/students/students.component';
import { AddStudentComponent } from './_components/add-student/add-student.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Characters', component: CharactersComponent },
    { path: 'Staff', component: StaffComponent },
    { path: 'Students', component: StudentsComponent },
    { path: 'Students/Add', component: AddStudentComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
