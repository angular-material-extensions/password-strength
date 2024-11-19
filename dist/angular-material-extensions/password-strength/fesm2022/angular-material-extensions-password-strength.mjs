import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input, EventEmitter, forwardRef, ChangeDetectionStrategy, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { UntypedFormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1$1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { animation, style, animate, keyframes, trigger, transition, query, stagger, animateChild, useAnimation } from '@angular/animations';
import * as i1$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';

var Colors;
(function (Colors) {
    Colors["primary"] = "primary";
    Colors["accent"] = "accent";
    Colors["warn"] = "warn";
})(Colors || (Colors = {}));

var Criteria;
(function (Criteria) {
    Criteria["at_least_eight_chars"] = "minChar";
    Criteria["at_least_one_lower_case_char"] = "lowerCase";
    Criteria["at_least_one_upper_case_char"] = "upperCase";
    Criteria["at_least_one_digit_char"] = "digit";
    Criteria["at_least_one_special_char"] = " specialChar";
    Criteria["at_custom_chars"] = "customChars";
})(Criteria || (Criteria = {}));

class MatPassToggleVisibilityComponent {
    isVisible;
    tabindex;
    get type() {
        return this.isVisible ? 'text' : 'password';
    }
    static ɵfac = function MatPassToggleVisibilityComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatPassToggleVisibilityComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPassToggleVisibilityComponent, selectors: [["mat-pass-toggle-visibility"]], inputs: { isVisible: "isVisible", tabindex: "tabindex" }, decls: 3, vars: 2, consts: [["mat-icon-button", "", "matRipple", "", "matRippleCentered", "true", "matRipple", "", "type", "button", 1, "mat-icon-button", "cdk-focused", "cdk-mouse-focused", 3, "click"]], template: function MatPassToggleVisibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function MatPassToggleVisibilityComponent_Template_button_click_0_listener() { return ctx.isVisible = !ctx.isVisible; });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵattribute("tabindex", ctx.tabindex ? ctx.tabindex : null);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isVisible ? "visibility" : "visibility_off");
        } }, dependencies: [i1.MatIconButton, i2.MatIcon, i3.MatRipple], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPassToggleVisibilityComponent, [{
        type: Component,
        args: [{ selector: 'mat-pass-toggle-visibility', encapsulation: ViewEncapsulation.None, template: "<button\n  (click)=\"isVisible = !isVisible\"\n  class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\n  mat-icon-button\n  matRipple\n  matRippleCentered=\"true\"\n  matRipple\n  [attr.tabindex]=\"tabindex ? tabindex : null\"\n  type=\"button\"\n>\n  <mat-icon>{{ isVisible ? \"visibility\" : \"visibility_off\" }}</mat-icon>\n</button>\n" }]
    }], null, { isVisible: [{
            type: Input
        }], tabindex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatPassToggleVisibilityComponent, { className: "MatPassToggleVisibilityComponent" }); })();

class MatPasswordStrengthValidator {
    isUndefinedOrEmpty(control) {
        if (!control || !control.value || control.value.length === 0) {
            return undefined;
        }
    }
    validate(criteria, regex) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (!regex.test(control.value)) {
                const failed = {};
                failed[criteria] = {
                    actualValue: control.value,
                    requiredPattern: regex
                };
                return failed;
            }
            return undefined;
        };
        return validator;
    }
    confirm(password) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (control.value !== password) {
                return {
                    notConfirmed: {
                        password: password,
                        passwordConfirmation: control.value
                    }
                };
            }
            return undefined;
        };
        return validator;
    }
}

const RegExpValidator = {
    'lowerCase': RegExp(/^(?=.*?[a-z])/),
    'upperCase': RegExp(/^(?=.*?[A-Z])/),
    'digit': RegExp(/^(?=.*?[0-9])/),
    'specialChar': RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/),
};

class MatPasswordStrengthComponent {
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
        } }, dependencies: [i1$1.MatProgressBar], styles: [".green   [_nghost-%COMP%]  .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"], changeDetection: 0 });
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

function flipIn(timing, rotateX, rotateY) {
    const params = { timing: timing, delay: 0, rotateX, rotateY };
    return animation([
        style({ 'backface-visibility': 'visible' }),
        animate('{{ timing }}s {{ delay }}s ease-in', keyframes([
            style({
                opacity: 0,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                offset: 0,
            }),
            style({
                opacity: 1,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                offset: 0.4,
            }),
            style({
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
                offset: 0.6,
            }),
            style({
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
                offset: 0.8,
            }),
            style({
                transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
                offset: 1,
            }),
        ])),
    ], { params });
}
const flipInX = flipIn(1, 1, 0);
const flipInY = flipIn(1, 0, 1);
const shake = animation(animate('{{ timing }}s {{ delay }}s', keyframes([
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
    style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
])), { params: { timing: 1, delay: 0 } });

function MatPasswordStrengthInfoComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    i0.ɵɵproperty("@flipY", undefined);
} }
function MatPasswordStrengthInfoComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_2_div_1_Template, 1, 1, "div", 4)(2, MatPasswordStrengthInfoComponent_div_2_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_2_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r2 = i0.ɵɵreference(3);
    const error_r3 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtLeastOneLowerCaseLetter)("ngIfThen", done_r2)("ngIfElse", error_r3);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.lowerCaseCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_3_div_1_Template, 1, 0, "div", 4)(2, MatPasswordStrengthInfoComponent_div_3_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_3_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r4 = i0.ɵɵreference(3);
    const error_r5 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtLeastOneUpperCaseLetter)("ngIfThen", done_r4)("ngIfElse", error_r5);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.upperCaseCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_4_div_1_Template, 1, 0, "div", 4)(2, MatPasswordStrengthInfoComponent_div_4_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_4_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r6 = i0.ɵɵreference(3);
    const error_r7 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtLeastOneDigit)("ngIfThen", done_r6)("ngIfElse", error_r7);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.digitsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_5_div_1_Template, 1, 0, "div", 4)(2, MatPasswordStrengthInfoComponent_div_5_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_5_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r8 = i0.ɵɵreference(3);
    const error_r9 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtLeastOneSpecialChar)("ngIfThen", done_r8)("ngIfElse", error_r9);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.specialCharsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_6_div_1_Template, 1, 0, "div", 4)(2, MatPasswordStrengthInfoComponent_div_6_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_6_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r10 = i0.ɵɵreference(3);
    const error_r11 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtLeastMinChars)("ngIfThen", done_r10)("ngIfElse", error_r11);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.minCharsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_7_div_1_Template, 1, 0, "div", 4)(2, MatPasswordStrengthInfoComponent_div_7_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_7_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r12 = i0.ɵɵreference(3);
    const error_r13 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtCustomChars)("ngIfThen", done_r12)("ngIfElse", error_r13);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.customCharsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_8_div_1_Template, 1, 0, "div", 4)(2, MatPasswordStrengthInfoComponent_div_8_ng_template_2_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, MatPasswordStrengthInfoComponent_div_8_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const done_r14 = i0.ɵɵreference(3);
    const error_r15 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.strength === 100)("ngIfThen", done_r14)("ngIfElse", error_r15);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Password's strength = ", ctx_r0.passwordComponent.strength, " %100");
} }
class MatPasswordStrengthInfoComponent {
    passwordComponent;
    enableScoreInfo = false;
    lowerCaseCriteriaMsg = 'contains at least one lower character';
    upperCaseCriteriaMsg = 'contains at least one upper character';
    digitsCriteriaMsg = 'contains at least one digit character';
    specialCharsCriteriaMsg = 'contains at least one special character';
    customCharsCriteriaMsg = 'contains at least one custom character';
    minCharsCriteriaMsg;
    matIconDone = 'done';
    matIconError = 'error';
    ngOnInit() {
        if (!this.minCharsCriteriaMsg) {
            this.minCharsCriteriaMsg = `contains at least ${this.passwordComponent.min} characters`;
        }
    }
    static ɵfac = function MatPasswordStrengthInfoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatPasswordStrengthInfoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPasswordStrengthInfoComponent, selectors: [["mat-password-strength-info"]], inputs: { passwordComponent: "passwordComponent", enableScoreInfo: "enableScoreInfo", lowerCaseCriteriaMsg: "lowerCaseCriteriaMsg", upperCaseCriteriaMsg: "upperCaseCriteriaMsg", digitsCriteriaMsg: "digitsCriteriaMsg", specialCharsCriteriaMsg: "specialCharsCriteriaMsg", customCharsCriteriaMsg: "customCharsCriteriaMsg", minCharsCriteriaMsg: "minCharsCriteriaMsg", matIconDone: "matIconDone", matIconError: "matIconError" }, exportAs: ["matPasswordStrengthInfo"], decls: 9, vars: 8, consts: [["done", ""], ["error", ""], ["class", "info-row", 4, "ngIf"], [1, "info-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["color", "primary"], ["color", "warn"]], template: function MatPasswordStrengthInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card")(1, "mat-card-content");
            i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_2_Template, 8, 5, "div", 2)(3, MatPasswordStrengthInfoComponent_div_3_Template, 8, 5, "div", 2)(4, MatPasswordStrengthInfoComponent_div_4_Template, 8, 5, "div", 2)(5, MatPasswordStrengthInfoComponent_div_5_Template, 8, 5, "div", 2)(6, MatPasswordStrengthInfoComponent_div_6_Template, 8, 5, "div", 2)(7, MatPasswordStrengthInfoComponent_div_7_Template, 8, 5, "div", 2)(8, MatPasswordStrengthInfoComponent_div_8_Template, 8, 5, "div", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("@list", undefined);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableLowerCaseLetterRule);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableUpperCaseLetterRule);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableDigitRule);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableSpecialCharRule);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableLengthRule);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.passwordComponent.customValidator);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableScoreInfo);
        } }, dependencies: [i1$2.NgIf, i2$1.MatCard, i2$1.MatCardContent, i2.MatIcon], styles: ["mat-card[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}"], data: { animation: [
                // nice stagger effect when showing existing elements
                trigger('list', [
                    transition(':enter', [
                        // child animation selector + stagger
                        query('@items', stagger(300, animateChild()))
                    ]),
                ]),
                trigger('items', [
                    // cubic-bezier for a tiny bouncing feel
                    transition(':enter', [
                        style({ transform: 'scale(0.5)', opacity: 0 }),
                        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                    transition(':leave', [
                        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
                    ]),
                ]),
                trigger('positiveState', [
                    transition(':enter', [
                        style({ 'backface-visibility': 'visible' }),
                        animate('{{ timing }}s {{ delay }}s ease-in', keyframes([
                            style({
                                opacity: 0,
                                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                                offset: 0,
                            }),
                            style({
                                opacity: 1,
                                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                                offset: 0.4,
                            }),
                            style({
                                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
                                offset: 0.6,
                            }),
                            style({
                                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
                                offset: 0.8,
                            }),
                            style({
                                transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
                                offset: 1,
                            }),
                        ])),
                    ], { params: { timing: 1, delay: 0, rotateX: 1, rotateY: 0 } }),
                ]),
                trigger('negativeState', [
                    transition(':enter', useAnimation(shake)),
                ]),
            ] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthInfoComponent, [{
        type: Component,
        args: [{ selector: 'mat-password-strength-info', exportAs: 'matPasswordStrengthInfo', animations: [
                    // nice stagger effect when showing existing elements
                    trigger('list', [
                        transition(':enter', [
                            // child animation selector + stagger
                            query('@items', stagger(300, animateChild()))
                        ]),
                    ]),
                    trigger('items', [
                        // cubic-bezier for a tiny bouncing feel
                        transition(':enter', [
                            style({ transform: 'scale(0.5)', opacity: 0 }),
                            animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(1)', opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                            animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
                        ]),
                    ]),
                    trigger('positiveState', [
                        transition(':enter', [
                            style({ 'backface-visibility': 'visible' }),
                            animate('{{ timing }}s {{ delay }}s ease-in', keyframes([
                                style({
                                    opacity: 0,
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                                    offset: 0,
                                }),
                                style({
                                    opacity: 1,
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                                    offset: 0.4,
                                }),
                                style({
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
                                    offset: 0.6,
                                }),
                                style({
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
                                    offset: 0.8,
                                }),
                                style({
                                    transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
                                    offset: 1,
                                }),
                            ])),
                        ], { params: { timing: 1, delay: 0, rotateX: 1, rotateY: 0 } }),
                    ]),
                    trigger('negativeState', [
                        transition(':enter', useAnimation(shake)),
                    ]),
                ], template: "<mat-card @list>\n  <mat-card-content>\n    <div *ngIf=\"passwordComponent.enableLowerCaseLetterRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneLowerCaseLetter; then done else error\" @flipY>\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>{{lowerCaseCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableUpperCaseLetterRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneUpperCaseLetter; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>{{upperCaseCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableDigitRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneDigit; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>{{digitsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableSpecialCharRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastOneSpecialChar; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>{{specialCharsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.enableLengthRule\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtLeastMinChars; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>{{minCharsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"passwordComponent.customValidator\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.containAtCustomChars; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>{{customCharsCriteriaMsg}}</span>\n    </div>\n\n    <div *ngIf=\"enableScoreInfo\" @items class=\"info-row\">\n      <div *ngIf=\"passwordComponent.strength === 100; then done else error\">\n      </div>\n      <ng-template #done>\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\n      </ng-template>\n      <ng-template #error>\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\n      </ng-template>\n      <span>Password's strength = {{passwordComponent.strength}} %100</span>\n    </div>\n\n  </mat-card-content>\n</mat-card>", styles: ["mat-card{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card mat-card-content{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card mat-card-content mat-icon{margin-right:10px}mat-card mat-card-content .info-row{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}\n"] }]
    }], null, { passwordComponent: [{
            type: Input
        }], enableScoreInfo: [{
            type: Input
        }], lowerCaseCriteriaMsg: [{
            type: Input
        }], upperCaseCriteriaMsg: [{
            type: Input
        }], digitsCriteriaMsg: [{
            type: Input
        }], specialCharsCriteriaMsg: [{
            type: Input
        }], customCharsCriteriaMsg: [{
            type: Input
        }], minCharsCriteriaMsg: [{
            type: Input
        }], matIconDone: [{
            type: Input
        }], matIconError: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatPasswordStrengthInfoComponent, { className: "MatPasswordStrengthInfoComponent" }); })();

class MatPasswordStrengthModule {
    static forRoot() {
        return {
            ngModule: MatPasswordStrengthModule,
            providers: []
        };
    }
    static ɵfac = function MatPasswordStrengthModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MatPasswordStrengthModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MatPasswordStrengthModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MatProgressBarModule,
            MatButtonModule,
            MatCardModule,
            MatIconModule,
            MatRippleModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatProgressBarModule,
                    MatButtonModule,
                    MatCardModule,
                    MatIconModule,
                    MatRippleModule
                ],
                exports: [
                    MatPasswordStrengthComponent,
                    MatPasswordStrengthInfoComponent,
                    MatPassToggleVisibilityComponent
                ],
                declarations: [
                    MatPasswordStrengthComponent,
                    MatPasswordStrengthInfoComponent,
                    MatPassToggleVisibilityComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatPasswordStrengthModule, { declarations: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent], imports: [CommonModule,
        MatProgressBarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule], exports: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent] }); })();

/*
 * Public API Surface of password-strength
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Colors, Criteria, MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPasswordStrengthModule, MatPasswordStrengthValidator, RegExpValidator, flipIn, flipInX, flipInY, shake };
//# sourceMappingURL=angular-material-extensions-password-strength.mjs.map
