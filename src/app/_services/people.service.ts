import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Person } from '@app/_models'

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private http: HttpClient) { }

    getCharactersByHouse(houseName: string): Observable<Person[]> {
        return this.http.get<Person[]>(`${environment.apiURL}/house/${houseName}`)
        .pipe(
            tap(_ => console.log(`Success: Fetched all characters of ${houseName}`)),
            catchError(this.handleError<Person[]>('getAllCharactersByHouse', []))
          );
    }

    getAllStaff(): Observable<Person[]> {
        return this.http.get<Person[]>(`${environment.apiURL}/staff`)
        .pipe(
            tap(_ => console.log('Success: Fetched all staff')),
            catchError(this.handleError<Person[]>('getAllStaff', []))
          );
    }

    getAllStudents(): Observable<Person[]> {
        return this.http.get<Person[]>(`${environment.apiURL}/students`)
        .pipe(
            tap(_ => console.log('Success: Fetched all students')),
            catchError(this.handleError<Person[]>('getAllStudents', []))
          );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
}