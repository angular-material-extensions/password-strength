import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, ValidatorFn, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material';
import {Criteria} from '../../enum/criteria.enum';
import {Colors} from '../../enum/colors.enum';
import {MatPasswordStrengthValidator} from '../../validator/mat-password-strength-validator';
import {RegExpValidator} from '../../validator/regexp.class';


@Component({
  selector: 'mat-password-strength',
  exportAs: 'matPasswordStrength',
  templateUrl: './mat-password-strength.component.html',
  styleUrls: ['./mat-password-strength.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatPasswordStrengthComponent implements OnInit, OnChanges {

  @Input() password: string;
  @Input() externalError: boolean;

  @Input() enableLengthRule = true;
  @Input() enableLowerCaseLetterRule = true;
  @Input() enableUpperCaseLetterRule = true;
  @Input() enableDigitRule = true;
  @Input() enableSpecialCharRule = true;

  @Input() min = 8;
  @Input() max = 30;
  @Input() customValidator: RegExp;

  @Input() warnThreshold = 21;
  @Input() accentThreshold = 81;

  @Output()
  onStrengthChanged: EventEmitter<number> = new EventEmitter();

  criteriaMap = new Map<Criteria, RegExp>();

  containAtLeastMinChars: boolean;
  containAtLeastOneLowerCaseLetter: boolean;
  containAtLeastOneUpperCaseLetter: boolean;
  containAtLeastOneDigit: boolean;
  containAtLeastOneSpecialChar: boolean;
  containAtCustomChars: boolean;

  // TO ACCESS VIA CONTENT CHILD
  passwordFormControl: FormControl = new FormControl();
  passwordConfirmationFormControl: FormControl = new FormControl();

  validatorsArray: ValidatorFn[] = [];

  private _strength = 0;
  private _color: ThemePalette;

  Validators: ValidatorFn;
  matPasswordStrengthValidator = new MatPasswordStrengthValidator();

  ngOnInit(): void {
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

  get color(): ThemePalette {

    if (this._strength < this.warnThreshold) {
      return Colors.warn;
    } else if (this._strength < this.accentThreshold) {
      return Colors.accent;
    } else {
      return Colors.primary;
    }
  }

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
    this.validatorsArray = [];
    this.criteriaMap = new Map<Criteria, RegExp>();
    this.passwordConfirmationFormControl
      .setValidators(Validators.compose([
        Validators.required, this.matPasswordStrengthValidator.confirm(this.password)
      ]));
    this.validatorsArray.push(Validators.required);
    if (this.enableLengthRule) {
      this.criteriaMap.set(Criteria.at_least_eight_chars, RegExp(`^.{${this.min},${this.max}}$`));
      this.validatorsArray.push(Validators.minLength(this.min));
      this.validatorsArray.push(Validators.maxLength(this.max));
    }
    if (this.enableLowerCaseLetterRule) {
      this.criteriaMap.set(Criteria.at_least_one_lower_case_char, RegExpValidator.lowerCase);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.lowerCase))
    }
    if (this.enableUpperCaseLetterRule) {
      this.criteriaMap.set(Criteria.at_least_one_upper_case_char, RegExpValidator.upperCase);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.upperCase))
    }
    if (this.enableDigitRule) {
      this.criteriaMap.set(Criteria.at_least_one_digit_char, RegExpValidator.digit);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.digit))
    }
    if (this.enableSpecialCharRule) {
      this.criteriaMap.set(Criteria.at_least_one_special_char, RegExpValidator.specialChar);
      this.validatorsArray.push(Validators.pattern(RegExpValidator.specialChar))
    }
    if (this.customValidator) {
      this.criteriaMap.set(Criteria.at_custom_chars, this.parseCustomValidatorsRegex());
      this.validatorsArray.push(Validators.pattern(this.parseCustomValidatorsRegex()))
    }

    this.criteriaMap.forEach((value: any, key: string) => {
      this.validatorsArray.push(this.matPasswordStrengthValidator.validate(key, value));
    });

    this.passwordFormControl.setValidators(Validators.compose([...this.validatorsArray]));
    this.Validators = Validators.compose([...this.validatorsArray]);

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
    this.setRulesAndValidators();
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
}
