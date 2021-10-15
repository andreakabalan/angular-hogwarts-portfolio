import { Component, OnInit } from '@angular/core';

import { Person } from '@app/_models';
import { PeopleService } from '@app/_services';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    students: Person[] = [];

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
        this.getAllStudents();
    }

    getAllStudents(): void {
        this.peopleService.getAllStudents()
            .subscribe(x => this.students = x);
    }

}
