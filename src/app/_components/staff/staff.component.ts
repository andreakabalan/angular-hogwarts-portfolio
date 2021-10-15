import { Component, OnInit } from '@angular/core';

import { Person } from '@app/_models';
import { PeopleService } from '@app/_services';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

    staff: Person[] = [];

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
        this.getAllStaff();
    }

    getAllStaff(): void {
        this.peopleService.getAllStaff()
            .subscribe(x => this.staff = x);
    }

}
