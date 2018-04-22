import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

export enum Colors {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}

@Component({
  selector: 'ngx-material-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, OnChanges {

  @Input()
  password: string;

  @Input()
  externalError: boolean;

  @Output()
  onStrengthChanged: EventEmitter<number> = new EventEmitter<number>();

  containAtLeastEightChars: boolean;
  containAtLeastOneLowerCaseLetter: boolean;
  containAtLeastOneUpperCaseLetter: boolean;
  containAtLeastOneDigit: boolean;
  containAtLeastOneSpecialChar: boolean;

  private _strength: number;

  private _color: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.externalError && changes.externalError.firstChange) {
      this._color = Colors.primary;
      return;
    }
    if (changes.externalError && changes.externalError.currentValue) {
      this._color = Colors.warn;
      return;
    }
    this.password && this.password.length > 0 ?
      this.calculatePasswordStrength() : this.reset();
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

  private _containAtLeastEightChars(): boolean {
    this.containAtLeastEightChars = this.password.length >= 8;
    return this.containAtLeastEightChars;
  }

  private _containAtLeastOneLowerCaseLetter(): boolean {
    this.containAtLeastOneLowerCaseLetter = RegExp(/^(?=.*?[a-z])/).test(this.password);
    return this.containAtLeastOneLowerCaseLetter;
  }

  private _containAtLeastOneUpperCaseLetter(): boolean {
    this.containAtLeastOneUpperCaseLetter = RegExp(/^(?=.*?[A-Z])/).test(this.password);
    return this.containAtLeastOneUpperCaseLetter;
  }

  private _containAtLeastOneDigit(): boolean {
    this.containAtLeastOneDigit = RegExp(/^(?=.*?[0-9])/).test(this.password);
    return this.containAtLeastOneDigit;
  }

  private _containAtLeastOneSpecialChar(): boolean {
    this.containAtLeastOneSpecialChar = RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/).test(this.password);
    return this.containAtLeastOneSpecialChar;
  }

  calculatePasswordStrength() {
    const requirements: Array<boolean> = [];
    const unit = 100 / 5;

    requirements.push(
      this._containAtLeastEightChars(),
      this._containAtLeastOneLowerCaseLetter(),
      this._containAtLeastOneUpperCaseLetter(),
      this._containAtLeastOneDigit(),
      this._containAtLeastOneSpecialChar());

    this._strength = requirements.filter(v => v).length * unit;
    this.onStrengthChanged.emit(this.strength);
  }

  reset() {
    this._strength = 0;
    this.containAtLeastEightChars =
      this.containAtLeastOneLowerCaseLetter =
        this.containAtLeastOneUpperCaseLetter =
          this.containAtLeastOneDigit =
            this.containAtLeastOneSpecialChar = false;
  }
}
