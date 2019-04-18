import {AbstractControl, ValidatorFn} from '@angular/forms';

export class MatPasswordStrengthValidator {

  isUndefinedOrEmpty(control: AbstractControl): any | undefined {
    if (!control || control.value.length === 0) {
      return undefined;
    }
  }

  validate(criteria: string, regex: RegExp): ValidatorFn {
    const validator = (control: AbstractControl): { [key: string]: any } => {
      this.isUndefinedOrEmpty(control);
      if (!regex.test(control.value)) {
        return {
          key: true
        }
      }
      return undefined;
    };
    return validator;
  }

}
