import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { UntypedFormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Colors, Criteria } from '../../enum';
import { MatPasswordStrengthValidator } from '../../validator';
import { RegExpValidator } from '../../validator/regexp.class';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
export class MatPasswordStrengthComponent {
    password;
    externalError;
    enableLengthRule = true;
    enableLowerCaseLetterRule = true;
    enableUpperCaseLetterRule = true;
    enableDigitRule = true;
    enableSpecialCharRule = true;
    min = 8;
    max = 30;
    customValidator;
    warnThreshold = 21;
    accentThreshold = 81;
    onStrengthChanged = new EventEmitter();
    criteriaMap = new Map();
    containAtLeastMinChars;
    containAtLeastOneLowerCaseLetter;
    containAtLeastOneUpperCaseLetter;
    containAtLeastOneDigit;
    containAtLeastOneSpecialChar;
    containAtCustomChars;
    // TO ACCESS VIA CONTENT CHILD
    passwordFormControl = new UntypedFormControl();
    passwordConfirmationFormControl = new UntypedFormControl();
    validatorsArray = [];
    Validators;
    matPasswordStrengthValidator = new MatPasswordStrengthValidator();
    _strength = 0;
    get strength() {
        return this._strength ? this._strength : 0;
    }
    _color;
    get color() {
        if (this._strength < this.warnThreshold) {
            return Colors.warn;
        }
        else if (this._strength < this.accentThreshold) {
            return Colors.accent;
        }
        else {
            return Colors.primary;
        }
    }
    propagateChange = (_) => {
    };
    ngOnInit() {
        this.setRulesAndValidators();
    }
    ngOnChanges(changes) {
        if ((changes.externalError && changes.externalError.firstChange) || (changes.password && changes.password.firstChange)) {
            return;
        }
        else if (changes.externalError && changes.externalError.currentValue) {
            this._color = Colors.warn;
            return;
        }
        else if (changes.password && changes.password.previousValue === changes.password.currentValue && !changes.password.firstChange) {
            this.calculatePasswordStrength();
        }
        else {
            this.password && this.password.length > 0 ?
                this.calculatePasswordStrength() : this.reset();
        }
    }
    parseCustomValidatorsRegex(value = this.customValidator) {
        if (this.customValidator instanceof RegExp) {
            return this.customValidator;
        }
        else if (typeof this.customValidator === 'string') {
            return RegExp(this.customValidator);
        }
    }
    setRulesAndValidators() {
        this.validatorsArray = [];
        this.criteriaMap = new Map();
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
            this.validatorsArray.push(Validators.pattern(RegExpValidator.lowerCase));
        }
        if (this.enableUpperCaseLetterRule) {
            this.criteriaMap.set(Criteria.at_least_one_upper_case_char, RegExpValidator.upperCase);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.upperCase));
        }
        if (this.enableDigitRule) {
            this.criteriaMap.set(Criteria.at_least_one_digit_char, RegExpValidator.digit);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.digit));
        }
        if (this.enableSpecialCharRule) {
            this.criteriaMap.set(Criteria.at_least_one_special_char, RegExpValidator.specialChar);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.specialChar));
        }
        if (this.customValidator) {
            this.criteriaMap.set(Criteria.at_custom_chars, this.parseCustomValidatorsRegex());
            this.validatorsArray.push(Validators.pattern(this.parseCustomValidatorsRegex()));
        }
        this.criteriaMap.forEach((value, key) => {
            this.validatorsArray.push(this.matPasswordStrengthValidator.validate(key, value));
        });
        this.passwordFormControl.setValidators(Validators.compose([...this.validatorsArray]));
        this.Validators = Validators.compose([...this.validatorsArray]);
    }
    calculatePasswordStrength() {
        const requirements = [];
        const unit = 100 / this.criteriaMap.size;
        // console.log('this.criteriaMap.size = ', this.criteriaMap.size);
        // console.log('unit = ', unit);
        requirements.push(this.enableLengthRule ? this._containAtLeastMinChars() : false, this.enableLowerCaseLetterRule ? this._containAtLeastOneLowerCaseLetter() : false, this.enableUpperCaseLetterRule ? this._containAtLeastOneUpperCaseLetter() : false, this.enableDigitRule ? this._containAtLeastOneDigit() : false, this.enableSpecialCharRule ? this._containAtLeastOneSpecialChar() : false, this.customValidator ? this._containCustomChars() : false);
        this._strength = requirements.filter(v => v).length * unit;
        this.propagateChange(this.strength);
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
    writeValue(obj) {
        if (obj) {
            this._strength = obj;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        // throw new Error("Method not implemented.");
    }
    setDisabledState(isDisabled) {
        // throw new Error("Method not implemented.");
    }
    _containAtLeastMinChars() {
        this.containAtLeastMinChars = this.password.length >= this.min;
        return this.containAtLeastMinChars;
    }
    _containAtLeastOneLowerCaseLetter() {
        this.containAtLeastOneLowerCaseLetter =
            this.criteriaMap
                .get(Criteria.at_least_one_lower_case_char)
                .test(this.password);
        return this.containAtLeastOneLowerCaseLetter;
    }
    _containAtLeastOneUpperCaseLetter() {
        this.containAtLeastOneUpperCaseLetter =
            this.criteriaMap
                .get(Criteria.at_least_one_upper_case_char)
                .test(this.password);
        return this.containAtLeastOneUpperCaseLetter;
    }
    _containAtLeastOneDigit() {
        this.containAtLeastOneDigit =
            this.criteriaMap
                .get(Criteria.at_least_one_digit_char)
                .test(this.password);
        return this.containAtLeastOneDigit;
    }
    _containAtLeastOneSpecialChar() {
        this.containAtLeastOneSpecialChar =
            this.criteriaMap
                .get(Criteria.at_least_one_special_char)
                .test(this.password);
        return this.containAtLeastOneSpecialChar;
    }
    _containCustomChars() {
        this.containAtCustomChars =
            this.criteriaMap
                .get(Criteria.at_custom_chars)
                .test(this.password);
        return this.containAtCustomChars;
    }
    ngAfterContentChecked() {
        if (this.password) {
            this.calculatePasswordStrength();
        }
    }
    static ɵfac = function MatPasswordStrengthComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatPasswordStrengthComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPasswordStrengthComponent, selectors: [["mat-password-strength"]], inputs: { password: "password", externalError: "externalError", enableLengthRule: "enableLengthRule", enableLowerCaseLetterRule: "enableLowerCaseLetterRule", enableUpperCaseLetterRule: "enableUpperCaseLetterRule", enableDigitRule: "enableDigitRule", enableSpecialCharRule: "enableSpecialCharRule", min: "min", max: "max", customValidator: "customValidator", warnThreshold: "warnThreshold", accentThreshold: "accentThreshold" }, outputs: { onStrengthChanged: "onStrengthChanged" }, exportAs: ["matPasswordStrength"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MatPasswordStrengthComponent),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [["mode", "determinate", 3, "color", "value"]], template: function MatPasswordStrengthComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "mat-progress-bar", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("color", ctx.color)("value", ctx.strength);
        } }, dependencies: [i1.MatProgressBar], styles: [".green   [_nghost-%COMP%]  .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthComponent, [{
        type: Component,
        args: [{ selector: 'mat-password-strength', exportAs: 'matPasswordStrength', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatPasswordStrengthComponent),
                        multi: true
                    }
                ], template: "<mat-progress-bar [color]=\"color\"\n                  [value]=\"strength\"\n                  mode=\"determinate\">\n</mat-progress-bar>\n", styles: [".green :host::ng-deep .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}\n"] }]
    }], null, { password: [{
            type: Input
        }], externalError: [{
            type: Input
        }], enableLengthRule: [{
            type: Input
        }], enableLowerCaseLetterRule: [{
            type: Input
        }], enableUpperCaseLetterRule: [{
            type: Input
        }], enableDigitRule: [{
            type: Input
        }], enableSpecialCharRule: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], customValidator: [{
            type: Input
        }], warnThreshold: [{
            type: Input
        }], accentThreshold: [{
            type: Input
        }], onStrengthChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatPasswordStrengthComponent, { className: "MatPasswordStrengthComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGtCQUFrQixFQUFFLGlCQUFpQixFQUFlLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBa0I3RCxNQUFNLE9BQU8sNEJBQTRCO0lBRTlCLFFBQVEsQ0FBUztJQUNqQixhQUFhLENBQVU7SUFFdkIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLHlCQUF5QixHQUFHLElBQUksQ0FBQztJQUNqQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7SUFDakMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN2QixxQkFBcUIsR0FB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SztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFHTixpQkFBaUI7a0JBRGhCLE1BQU07O2tGQWxCSSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgVW50eXBlZEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29sb3JzLCBDcml0ZXJpYX0gZnJvbSAnLi4vLi4vZW51bSc7XG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3J9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XG5pbXBvcnQge1JlZ0V4cFZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yL3JlZ2V4cC5jbGFzcyc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXBhc3N3b3JkLXN0cmVuZ3RoJyxcbiAgZXhwb3J0QXM6ICdtYXRQYXNzd29yZFN0cmVuZ3RoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4dGVybmFsRXJyb3I6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgZW5hYmxlTGVuZ3RoUnVsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGUgPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlRGlnaXRSdWxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlU3BlY2lhbENoYXJSdWxlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBtaW4gPSA4O1xuICBASW5wdXQoKSBtYXggPSAzMDtcbiAgQElucHV0KCkgY3VzdG9tVmFsaWRhdG9yOiBSZWdFeHA7XG5cbiAgQElucHV0KCkgd2FyblRocmVzaG9sZCA9IDIxO1xuICBASW5wdXQoKSBhY2NlbnRUaHJlc2hvbGQgPSA4MTtcblxuICBAT3V0cHV0KClcbiAgb25TdHJlbmd0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNyaXRlcmlhTWFwID0gbmV3IE1hcDxDcml0ZXJpYSwgUmVnRXhwPigpO1xuXG4gIGNvbnRhaW5BdExlYXN0TWluQ2hhcnM6IGJvb2xlYW47XG4gIGNvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyOiBib29sZWFuO1xuICBjb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjogYm9vbGVhbjtcbiAgY29udGFpbkF0TGVhc3RPbmVEaWdpdDogYm9vbGVhbjtcbiAgY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcjogYm9vbGVhbjtcbiAgY29udGFpbkF0Q3VzdG9tQ2hhcnM6IGJvb2xlYW47XG5cbiAgLy8gVE8gQUNDRVNTIFZJQSBDT05URU5UIENISUxEXG4gIHBhc3N3b3JkRm9ybUNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcGFzc3dvcmRDb25maXJtYXRpb25Gb3JtQ29udHJvbDogVW50eXBlZEZvcm1Db250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuXG4gIHZhbGlkYXRvcnNBcnJheTogVmFsaWRhdG9yRm5bXSA9IFtdO1xuICBWYWxpZGF0b3JzOiBWYWxpZGF0b3JGbjtcbiAgbWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciA9IG5ldyBNYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yKCk7XG5cbiAgcHJpdmF0ZSBfc3RyZW5ndGggPSAwO1xuXG4gIGdldCBzdHJlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdHJlbmd0aCA/IHRoaXMuX3N0cmVuZ3RoIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgZ2V0IGNvbG9yKCk6IFRoZW1lUGFsZXR0ZSB7XG5cbiAgICBpZiAodGhpcy5fc3RyZW5ndGggPCB0aGlzLndhcm5UaHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiBDb2xvcnMud2FybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0cmVuZ3RoIDwgdGhpcy5hY2NlbnRUaHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiBDb2xvcnMuYWNjZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ29sb3JzLnByaW1hcnk7XG4gICAgfVxuICB9XG5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKChjaGFuZ2VzLmV4dGVybmFsRXJyb3IgJiYgY2hhbmdlcy5leHRlcm5hbEVycm9yLmZpcnN0Q2hhbmdlKSB8fCAoY2hhbmdlcy5wYXNzd29yZCAmJiBjaGFuZ2VzLnBhc3N3b3JkLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlcy5leHRlcm5hbEVycm9yICYmIGNoYW5nZXMuZXh0ZXJuYWxFcnJvci5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gQ29sb3JzLndhcm47XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzLnBhc3N3b3JkICYmIGNoYW5nZXMucGFzc3dvcmQucHJldmlvdXNWYWx1ZSA9PT0gY2hhbmdlcy5wYXNzd29yZC5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZXMucGFzc3dvcmQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhc3N3b3JkICYmIHRoaXMucGFzc3dvcmQubGVuZ3RoID4gMCA/XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpIDogdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlQ3VzdG9tVmFsaWRhdG9yc1JlZ2V4KHZhbHVlOiBzdHJpbmcgfCBSZWdFeHAgPSB0aGlzLmN1c3RvbVZhbGlkYXRvcikge1xuICAgIGlmICh0aGlzLmN1c3RvbVZhbGlkYXRvciBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVmFsaWRhdG9yO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY3VzdG9tVmFsaWRhdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFJlZ0V4cCh0aGlzLmN1c3RvbVZhbGlkYXRvcik7XG4gICAgfVxuICB9XG5cbiAgc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk6IHZvaWQge1xuICAgIHRoaXMudmFsaWRhdG9yc0FycmF5ID0gW107XG4gICAgdGhpcy5jcml0ZXJpYU1hcCA9IG5ldyBNYXA8Q3JpdGVyaWEsIFJlZ0V4cD4oKTtcbiAgICB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uRm9ybUNvbnRyb2xcbiAgICAgIC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMubWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvci5jb25maXJtKHRoaXMucGFzc3dvcmQpXG4gICAgICBdKSk7XG4gICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICBpZiAodGhpcy5lbmFibGVMZW5ndGhSdWxlKSB7XG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9laWdodF9jaGFycywgUmVnRXhwKGBeLnske3RoaXMubWlufSwke3RoaXMubWF4fX0kYCkpO1xuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLm1pbikpO1xuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlKSB7XG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfbG93ZXJfY2FzZV9jaGFyLCBSZWdFeHBWYWxpZGF0b3IubG93ZXJDYXNlKTtcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci5sb3dlckNhc2UpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZSkge1xuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX3VwcGVyX2Nhc2VfY2hhciwgUmVnRXhwVmFsaWRhdG9yLnVwcGVyQ2FzZSk7XG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihSZWdFeHBWYWxpZGF0b3IudXBwZXJDYXNlKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVuYWJsZURpZ2l0UnVsZSkge1xuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2RpZ2l0X2NoYXIsIFJlZ0V4cFZhbGlkYXRvci5kaWdpdCk7XG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihSZWdFeHBWYWxpZGF0b3IuZGlnaXQpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5hYmxlU3BlY2lhbENoYXJSdWxlKSB7XG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfc3BlY2lhbF9jaGFyLCBSZWdFeHBWYWxpZGF0b3Iuc3BlY2lhbENoYXIpO1xuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLnNwZWNpYWxDaGFyKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1c3RvbVZhbGlkYXRvcikge1xuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfY3VzdG9tX2NoYXJzLCB0aGlzLnBhcnNlQ3VzdG9tVmFsaWRhdG9yc1JlZ2V4KCkpO1xuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXJzZUN1c3RvbVZhbGlkYXRvcnNSZWdleCgpKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jcml0ZXJpYU1hcC5mb3JFYWNoKCh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaCh0aGlzLm1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IudmFsaWRhdGUoa2V5LCB2YWx1ZSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYXNzd29yZEZvcm1Db250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5jb21wb3NlKFsuLi50aGlzLnZhbGlkYXRvcnNBcnJheV0pKTtcbiAgICB0aGlzLlZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzLmNvbXBvc2UoWy4uLnRoaXMudmFsaWRhdG9yc0FycmF5XSk7XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZVBhc3N3b3JkU3RyZW5ndGgoKTogdm9pZCB7XG4gICAgY29uc3QgcmVxdWlyZW1lbnRzOiBBcnJheTxib29sZWFuPiA9IFtdO1xuICAgIGNvbnN0IHVuaXQgPSAxMDAgLyB0aGlzLmNyaXRlcmlhTWFwLnNpemU7XG5cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jcml0ZXJpYU1hcC5zaXplID0gJywgdGhpcy5jcml0ZXJpYU1hcC5zaXplKTtcbiAgICAvLyBjb25zb2xlLmxvZygndW5pdCA9ICcsIHVuaXQpO1xuXG4gICAgcmVxdWlyZW1lbnRzLnB1c2goXG4gICAgICB0aGlzLmVuYWJsZUxlbmd0aFJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE1pbkNoYXJzKCkgOiBmYWxzZSxcbiAgICAgIHRoaXMuZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyKCkgOiBmYWxzZSxcbiAgICAgIHRoaXMuZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyKCkgOiBmYWxzZSxcbiAgICAgIHRoaXMuZW5hYmxlRGlnaXRSdWxlID8gdGhpcy5fY29udGFpbkF0TGVhc3RPbmVEaWdpdCgpIDogZmFsc2UsXG4gICAgICB0aGlzLmVuYWJsZVNwZWNpYWxDaGFyUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIoKSA6IGZhbHNlLFxuICAgICAgdGhpcy5jdXN0b21WYWxpZGF0b3IgPyB0aGlzLl9jb250YWluQ3VzdG9tQ2hhcnMoKSA6IGZhbHNlXG4gICAgKTtcblxuICAgIHRoaXMuX3N0cmVuZ3RoID0gcmVxdWlyZW1lbnRzLmZpbHRlcih2ID0+IHYpLmxlbmd0aCAqIHVuaXQ7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zdHJlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xlbmd0aCA9ICcsIHRoaXMuX3N0cmVuZ3RoIC8gdW5pdCk7XG4gICAgdGhpcy5vblN0cmVuZ3RoQ2hhbmdlZC5lbWl0KHRoaXMuc3RyZW5ndGgpO1xuICAgIHRoaXMuc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9zdHJlbmd0aCA9IDA7XG4gICAgdGhpcy5jb250YWluQXRMZWFzdE1pbkNoYXJzID1cbiAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIgPVxuICAgICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyID1cbiAgICAgICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lRGlnaXQgPVxuICAgICAgICAgICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9XG4gICAgICAgICAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhciA9IGZhbHNlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHRoaXMuX3N0cmVuZ3RoID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE1pbkNoYXJzKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY29udGFpbkF0TGVhc3RNaW5DaGFycyA9IHRoaXMucGFzc3dvcmQubGVuZ3RoID49IHRoaXMubWluO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0TWluQ2hhcnM7XG4gIH1cblxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcigpOiBib29sZWFuIHtcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyID1cbiAgICAgIHRoaXMuY3JpdGVyaWFNYXBcbiAgICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfbG93ZXJfY2FzZV9jaGFyKVxuICAgICAgICAudGVzdCh0aGlzLnBhc3N3b3JkKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcjtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXIgPVxuICAgICAgdGhpcy5jcml0ZXJpYU1hcFxuICAgICAgICAuZ2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV91cHBlcl9jYXNlX2NoYXIpXG4gICAgICAgIC50ZXN0KHRoaXMucGFzc3dvcmQpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVEaWdpdCgpOiBib29sZWFuIHtcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lRGlnaXQgPVxuICAgICAgdGhpcy5jcml0ZXJpYU1hcFxuICAgICAgICAuZ2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV9kaWdpdF9jaGFyKVxuICAgICAgICAudGVzdCh0aGlzLnBhc3N3b3JkKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZURpZ2l0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcigpOiBib29sZWFuIHtcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIgPVxuICAgICAgdGhpcy5jcml0ZXJpYU1hcFxuICAgICAgICAuZ2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV9zcGVjaWFsX2NoYXIpXG4gICAgICAgIC50ZXN0KHRoaXMucGFzc3dvcmQpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXI7XG4gIH1cblxuICBwcml2YXRlIF9jb250YWluQ3VzdG9tQ2hhcnMoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9XG4gICAgICB0aGlzLmNyaXRlcmlhTWFwXG4gICAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfY3VzdG9tX2NoYXJzKVxuICAgICAgICAudGVzdCh0aGlzLnBhc3N3b3JkKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRDdXN0b21DaGFycztcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYXNzd29yZCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKCk7XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LXByb2dyZXNzLWJhciBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInN0cmVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJkZXRlcm1pbmF0ZVwiPlxuPC9tYXQtcHJvZ3Jlc3MtYmFyPlxuIl19