import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

    name = new FormControl('', Validators.required);
    patronus = new FormControl('');
    dateOfBirth = new FormControl('');
    image = new FormControl('');

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    submit(): void {
        if(this.name.value === '') return;

        const student = {
            name: this.name.value,
            patronus: this.patronus.value,
            dateOfBirth: this.dateOfBirth.value,
            image: this.image.value
        };

        var students = JSON.parse(localStorage.getItem("students") || "[]");
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    
        console.log(JSON.stringify(students));

        this.router.navigate(['/Students']);
    }

}
