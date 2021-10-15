import { Component, OnInit } from '@angular/core';

import { Person } from '@app/_models';
import { PeopleService } from '@app/_services';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    characters: Person[] = [];

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
    }

    getCharactersByHouse(houseName: string): void {
        this.peopleService.getCharactersByHouse(houseName)
            .subscribe(x => this.characters = x);
    }

    houseSelected(houseName: any): void {
        this.getCharactersByHouse(houseName);
    }

}
