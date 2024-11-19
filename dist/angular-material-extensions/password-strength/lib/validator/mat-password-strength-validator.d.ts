import { AbstractControl, ValidatorFn } from '@angular/forms';
export declare class MatPasswordStrengthValidator {
    isUndefinedOrEmpty(control: AbstractControl): any | undefined;
    validate(criteria: string, regex: RegExp): ValidatorFn;
    confirm(password: string): ValidatorFn;
}
