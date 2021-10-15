import * as moment from 'moment';

/**
 * Function to calculate age from date of birth.
 */

export function calculateAge(dateOfBirth: any): number {
    return moment().diff(dateOfBirth, 'years');
}