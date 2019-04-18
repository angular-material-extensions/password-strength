import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Criteria} from '../../enum/criteria.enum';
import {Colors} from '../../enum/colors.enum';
import {MatPasswordStrengthValidator} from '../../validator/mat-password-strength-validator';
import {RegExpValidator} from '../../validator/regexp.class';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log('control -> ', control);
    const forbidden = 'nameRe.test(control.value)';
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Component({
  selector: 'mat-password-strength',
  exportAs: 'matPasswordStrength',
  templateUrl: './mat-password-strength.component.html',
  styleUrls: ['./mat-password-strength.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatPasswordStrengthComponent implements OnInit, OnChanges {

  @Input() password: string;
  @Input() validators: Criteria[] = Object.keys(Criteria).map(key => Criteria[key]);
  @Input() customValidator: RegExp;
  @Input() externalError: boolean;

  @Input() enableLengthRule = true;
  @Input() enableLowerCaseLetterRule = true;
  @Input() enableUpperCaseLetterRule = true;
  @Input() enableDigitRule = true;
  @Input() enableSpecialCharRule = true;

  @Input() min = 8;
  @Input() max = 30;

  // TODO 17.04.19 @anthonynahas
  // @Output()
  // onColorChanged: EventEmitter<string> = new EventEmitter();

  @Output()
  onStrengthChanged: EventEmitter<number> = new EventEmitter();

  criteriaMap = new Map<Criteria, RegExp>();

  containAtLeastMinChars: boolean;
  containAtLeastOneLowerCaseLetter: boolean;
  containAtLeastOneUpperCaseLetter: boolean;
  containAtLeastOneDigit: boolean;
  containAtLeastOneSpecialChar: boolean;
  containAtCustomChars: boolean;

  formGroup: FormGroup;
  passwordFormControl: FormControl = new FormControl();

  private _strength = 0;
  private _color: string;

  Validators: ValidatorFn;
  matPasswordStrengthValidator = new MatPasswordStrengthValidator();

  ngOnInit(): void {
    console.log('password strength comp. on init');
    this.setRulesAndValidators();

    if (this.password) {
      this.calculatePasswordStrength();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.externalError && changes.externalError.firstChange) || changes.password.isFirstChange()) {
      return;
    } else if (changes.externalError && changes.externalError.currentValue) {
      this._color = Colors.warn;
      return;
    } else if (changes.password.previousValue === changes.password.currentValue && !changes.password.firstChange) {
      this.calculatePasswordStrength();
    } else {
      this.password && this.password.length > 0 ?
        this.calculatePasswordStrength() : this.reset();
    }
  }

  get strength(): number {
    return this._strength ? this._strength : 0;
  }

  get color(): string {

    if (this._strength <= 20) {
      return Colors.warn;
    } else if (this._strength <= 80) {
      return Colors.accent;
    } else {
      return Colors.primary;
    }
  }

  // get Validators(): ValidatorFn {
  //   // this._Validators = this.matPasswordStrengthValidator.validate();
  //   const validatorsArray: ValidatorFn[] = [];
  //   this.validators.forEach(criteria => {
  //     console.log('criteria -> ', criteria, this.criteriaMap.get(criteria));
  //     validatorsArray.push(this.matPasswordStrengthValidator.validate(criteria.toString(), RegExpValidator.lowerCase))
  //   });
  //   this._Validators = Validators.compose([...validatorsArray]);
  //   return this._Validators;
  // }

  private _containAtLeastMinChars(): boolean {
    this.containAtLeastMinChars = this.password.length >= this.min;
    return this.containAtLeastMinChars;
  }

  private _containAtLeastOneLowerCaseLetter(): boolean {
    this.containAtLeastOneLowerCaseLetter =
      this.criteriaMap
        .get(Criteria.at_least_one_lower_case_char)
        .test(this.password);
    return this.containAtLeastOneLowerCaseLetter;
  }

  private _containAtLeastOneUpperCaseLetter(): boolean {
    this.containAtLeastOneUpperCaseLetter =
      this.criteriaMap
        .get(Criteria.at_least_one_upper_case_char)
        .test(this.password);
    return this.containAtLeastOneUpperCaseLetter;
  }

  private _containAtLeastOneDigit(): boolean {
    this.containAtLeastOneDigit =
      this.criteriaMap
        .get(Criteria.at_least_one_digit_char)
        .test(this.password);
    return this.containAtLeastOneDigit;
  }

  private _containAtLeastOneSpecialChar(): boolean {
    this.containAtLeastOneSpecialChar =
      this.criteriaMap
        .get(Criteria.at_least_one_special_char)
        .test(this.password);
    return this.containAtLeastOneSpecialChar;
  }

  private _containCustomChars(): boolean {
    this.containAtCustomChars =
      this.criteriaMap
        .get(Criteria.at_custom_chars)
        .test(this.password);
    return this.containAtCustomChars;
  }

  parseCustomValidatorsRegex(value: string | RegExp = this.customValidator) {
    if (this.customValidator instanceof RegExp) {
      return this.customValidator;
    } else if (typeof this.customValidator === 'string') {
      return RegExp(this.customValidator);
    }
  }

  setRulesAndValidators(): void {
    console.log('on setting rules');
    const validatorsArray: ValidatorFn[] = [];
    if (this.enableLengthRule) {
      this.criteriaMap.set(Criteria.at_least_eight_chars, RegExp(`^.{${this.min},${this.max}$`));
      validatorsArray.push(Validators.minLength(this.min));
      validatorsArray.push(Validators.maxLength(this.max));
    }
    if (this.enableLowerCaseLetterRule) {
      this.criteriaMap.set(Criteria.at_least_one_lower_case_char, RegExpValidator.lowerCase);
    }
    if (this.enableUpperCaseLetterRule) {
      this.criteriaMap.set(Criteria.at_least_one_upper_case_char, RegExpValidator.upperCase);
    }
    if (this.enableDigitRule) {
      this.criteriaMap.set(Criteria.at_least_one_digit_char, RegExpValidator.digit);
    }
    if (this.enableSpecialCharRule) {
      this.criteriaMap.set(Criteria.at_least_one_special_char, RegExpValidator.specialChar);
    }
    if (this.customValidator) {
      this.criteriaMap.set(Criteria.at_custom_chars, this.parseCustomValidatorsRegex());
    }

    // console.log('validators', this.validators);

    this.criteriaMap.forEach((value: any, key: string) => {
      console.log('setting validator with ', key, value);
      validatorsArray.push(this.matPasswordStrengthValidator.validate(key, value));
      // this.passwordFormControl.setValidators(Validators.pattern(value));
      // this.passwordFormControl.setValidators(this.matPasswordStrengthValidator.validate(key, value));
      this.Validators = this.matPasswordStrengthValidator.validate(key, value);
    });

    this.passwordFormControl.setValidators(Validators.compose([...validatorsArray]));
    // this.Validators = Validators.compose([validatorsArray[0].call]);
    console.log('validatorsArray = ', validatorsArray, this.Validators);

  }

  calculatePasswordStrength(): void {
    const requirements: Array<boolean> = [];
    const unit = 100 / this.criteriaMap.size;

    // console.log('this.criteriaMap.size = ', this.criteriaMap.size);
    // console.log('unit = ', unit);

    requirements.push(
      this.enableLengthRule ? this._containAtLeastMinChars() : false,
      this.enableLowerCaseLetterRule ? this._containAtLeastOneLowerCaseLetter() : false,
      this.enableUpperCaseLetterRule ? this._containAtLeastOneUpperCaseLetter() : false,
      this.enableDigitRule ? this._containAtLeastOneDigit() : false,
      this.enableSpecialCharRule ? this._containAtLeastOneSpecialChar() : false,
      this.customValidator ? this._containCustomChars() : false
    );

    this._strength = requirements.filter(v => v).length * unit;
    // console.log('length = ', this._strength / unit);
    this.onStrengthChanged.emit(this.strength);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPass.value;

    return pass === confirmPass ? null : {notSame: true}
  }


  reset() {
    this._strength = 0;
    this.containAtLeastMinChars =
      this.containAtLeastOneLowerCaseLetter =
        this.containAtLeastOneUpperCaseLetter =
          this.containAtLeastOneDigit =
            this.containAtCustomChars =
              this.containAtLeastOneSpecialChar = false;
  }

  lowerCaseChar(): ValidatorFn {
    const validator = (control: AbstractControl): { [key: string]: any } => {
      // this.isUndefinedOrEmpty(control);
      console.log('lowerCaseChar', !RegExpValidator.lowerCase.test(control.value));
      // control.setErrors({test: true});
      if (!RegExpValidator.lowerCase.test(control.value)) {
        return {
          'lowerCase': true
        };
      }
      return undefined;
    };
    return validator;
  }

}
