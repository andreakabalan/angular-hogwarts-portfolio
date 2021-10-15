import { Component, Input, OnInit } from '@angular/core';

import { Person } from '@app/_models';
import { calculateAge } from '@app/_helpers';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() people: Person[] = [];

    constructor() { }

    ngOnInit(): void { }

    calculateAge(person: Person): number | undefined {
        if(person.dateOfBirth === undefined) return undefined;
        else if(person.dateOfBirth.length == 0) return undefined;
        else {
            var splitDate = person.dateOfBirth.split("-");
            var fixedDate = `${splitDate[1]}-${splitDate[0]}-${splitDate[2]}`
            return calculateAge(fixedDate);
        }
    }

    orderNamesDescending(): void {
        this.people.sort((a, b) => (a.name < b.name ? -1 : 1));
    }

    orderNamesAscending(): void {
        this.people.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
}
