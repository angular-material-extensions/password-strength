import { Component, Input } from '@angular/core';
import { animate, animateChild, keyframes, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { shake } from '../../animations/index';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/card";
import * as i3 from "@angular/material/icon";
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
export class MatPasswordStrengthInfoComponent {
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
        } }, dependencies: [i1.NgIf, i2.MatCard, i2.MatCardContent, i3.MatIcon], styles: ["mat-card[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}"], data: { animation: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvSCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0F2QyxzQkFDTTs7SUFEZ0Ysa0NBQU07OztJQUcxRixtQ0FBeUM7SUFBQSxZQUFlO0lBQUEsaUJBQVc7OztJQUF6RCwwQ0FBYztJQUFpQixjQUFlO0lBQWYsd0NBQWU7OztJQUd4RCxtQ0FBc0M7SUFBQSxZQUFnQjtJQUFBLGlCQUFXOzs7SUFBdkQsMENBQWM7SUFBYyxjQUFnQjtJQUFoQix5Q0FBZ0I7OztJQVAxRCw4QkFBaUY7SUFNL0UsQUFIQSxBQUZBLHVGQUE2RiwySEFFMUUsMkhBR0M7SUFHcEIsNEJBQU07SUFB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LE1BQU0sRUFBRSxDQUFDO2lDQUNWLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFNBQVMsRUFDUCxzRUFBc0U7b0NBQ3hFLE1BQU0sRUFBRSxHQUFHO2lDQUNaLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFDUCxxRUFBcUU7b0NBQ3ZFLE1BQU0sRUFBRSxHQUFHO2lDQUNaLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFDUCxxRUFBcUU7b0NBQ3ZFLE1BQU0sRUFBRSxHQUFHO2lDQUNaLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFBRSx5Q0FBeUM7b0NBQ3BELE1BQU0sRUFBRSxDQUFDO2lDQUNWLENBQUM7NkJBQ0gsQ0FBQyxDQUNIO3lCQUNGLEVBQUUsRUFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQztxQkFDNUQsQ0FBQztvQkFDRixPQUFPLENBQUMsZUFBZSxFQUFFO3dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDMUMsQ0FBQztpQkFDSDtnQkFLRCxpQkFBaUI7a0JBRGhCLEtBQUs7WUFJTixlQUFlO2tCQURkLEtBQUs7WUFJTixvQkFBb0I7a0JBRG5CLEtBQUs7WUFJTixvQkFBb0I7a0JBRG5CLEtBQUs7WUFJTixpQkFBaUI7a0JBRGhCLEtBQUs7WUFJTix1QkFBdUI7a0JBRHRCLEtBQUs7WUFJTixzQkFBc0I7a0JBRHJCLEtBQUs7WUFJTixtQkFBbUI7a0JBRGxCLEtBQUs7WUFJTixXQUFXO2tCQURWLEtBQUs7WUFJTixZQUFZO2tCQURYLEtBQUs7O2tGQTdCSyxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnR9IGZyb20gJy4uL21hdC1wYXNzd29yZC1zdHJlbmd0aC9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50JztcbmltcG9ydCB7YW5pbWF0ZSwgYW5pbWF0ZUNoaWxkLCBrZXlmcmFtZXMsIHF1ZXJ5LCBzdGFnZ2VyLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7c2hha2V9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mbycsXG4gIGV4cG9ydEFzOiAnbWF0UGFzc3dvcmRTdHJlbmd0aEluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgLy8gbmljZSBzdGFnZ2VyIGVmZmVjdCB3aGVuIHNob3dpbmcgZXhpc3RpbmcgZWxlbWVudHNcbiAgICB0cmlnZ2VyKCdsaXN0JywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICAvLyBjaGlsZCBhbmltYXRpb24gc2VsZWN0b3IgKyBzdGFnZ2VyXG4gICAgICAgIHF1ZXJ5KCdAaXRlbXMnLFxuICAgICAgICAgIHN0YWdnZXIoMzAwLCBhbmltYXRlQ2hpbGQoKSlcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaXRlbXMnLCBbXG4gICAgICAvLyBjdWJpYy1iZXppZXIgZm9yIGEgdGlueSBib3VuY2luZyBmZWVsXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJywgb3BhY2l0eTogMH0pLFxuICAgICAgICBhbmltYXRlKCcxcyBjdWJpYy1iZXppZXIoLjgsLTAuNiwwLjIsMS41KScsXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMX0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEsIGhlaWdodDogJyonfSksXG4gICAgICAgIGFuaW1hdGUoJzFzIGN1YmljLWJlemllciguOCwtMC42LDAuMiwxLjUpJyxcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMC41KScsIG9wYWNpdHk6IDAsIGhlaWdodDogJzBweCcsIG1hcmdpbjogJzBweCd9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3Bvc2l0aXZlU3RhdGUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsnYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICd2aXNpYmxlJ30pLFxuICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICd7eyB0aW1pbmcgfX1zIHt7IGRlbGF5IH19cyBlYXNlLWluJyxcbiAgICAgICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCh7eyByb3RhdGVYIH19LCB7eyByb3RhdGVZIH19LCAwLCA5MGRlZyknLFxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2Qoe3sgcm90YXRlWCB9fSwge3sgcm90YXRlWSB9fSwgMCwgLTIwZGVnKScsXG4gICAgICAgICAgICAgIG9mZnNldDogMC40LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKHt7IHJvdGF0ZVggfX0sIHt7IHJvdGF0ZVkgfX0sIDAsIDEwZGVnKScsXG4gICAgICAgICAgICAgIG9mZnNldDogMC42LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKHt7IHJvdGF0ZVggfX0sIHt7IHJvdGF0ZVkgfX0sIDAsIC01ZGVnKScsXG4gICAgICAgICAgICAgIG9mZnNldDogMC44LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pXG4gICAgICAgICksXG4gICAgICBdLCB7cGFyYW1zOiB7dGltaW5nOiAxLCBkZWxheTogMCwgcm90YXRlWDogMSwgcm90YXRlWTogMH19KSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCduZWdhdGl2ZVN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKHNoYWtlKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwYXNzd29yZENvbXBvbmVudDogTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBlbmFibGVTY29yZUluZm8gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBsb3dlckNhc2VDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgbG93ZXIgY2hhcmFjdGVyJztcblxuICBASW5wdXQoKVxuICB1cHBlckNhc2VDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgdXBwZXIgY2hhcmFjdGVyJztcblxuICBASW5wdXQoKVxuICBkaWdpdHNDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgZGlnaXQgY2hhcmFjdGVyJztcblxuICBASW5wdXQoKVxuICBzcGVjaWFsQ2hhcnNDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXInO1xuXG4gIEBJbnB1dCgpXG4gIGN1c3RvbUNoYXJzQ3JpdGVyaWFNc2cgPSAnY29udGFpbnMgYXQgbGVhc3Qgb25lIGN1c3RvbSBjaGFyYWN0ZXInO1xuXG4gIEBJbnB1dCgpXG4gIG1pbkNoYXJzQ3JpdGVyaWFNc2c6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBtYXRJY29uRG9uZSA9ICdkb25lJztcblxuICBASW5wdXQoKVxuICBtYXRJY29uRXJyb3IgPSAnZXJyb3InO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5taW5DaGFyc0NyaXRlcmlhTXNnKSB7XG4gICAgICB0aGlzLm1pbkNoYXJzQ3JpdGVyaWFNc2cgPSBgY29udGFpbnMgYXQgbGVhc3QgJHt0aGlzLnBhc3N3b3JkQ29tcG9uZW50Lm1pbn0gY2hhcmFjdGVyc2BcbiAgICB9XG4gIH1cblxufVxuIiwiPG1hdC1jYXJkIEBsaXN0PlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZVwiIEBpdGVtcyBjbGFzcz1cImluZm8tcm93XCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXI7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCIgQGZsaXBZPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XG4gICAgICAgIDxtYXQtaWNvbiBAcG9zaXRpdmVTdGF0ZSBjb2xvcj1cInByaW1hcnlcIj57e21hdEljb25Eb25lfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XG4gICAgICAgIDxtYXQtaWNvbiBAbmVnYXRpdmVTdGF0ZSBjb2xvcj1cIndhcm5cIj57e21hdEljb25FcnJvcn19PC9tYXQtaWNvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8c3Bhbj57e2xvd2VyQ2FzZUNyaXRlcmlhTXNnfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZVwiIEBpdGVtcyBjbGFzcz1cImluZm8tcm93XCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXI7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuPnt7dXBwZXJDYXNlQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5lbmFibGVEaWdpdFJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxuICAgICAgPGRpdiAqbmdJZj1cInBhc3N3b3JkQ29tcG9uZW50LmNvbnRhaW5BdExlYXN0T25lRGlnaXQ7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuPnt7ZGlnaXRzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5lbmFibGVTcGVjaWFsQ2hhclJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxuICAgICAgPGRpdiAqbmdJZj1cInBhc3N3b3JkQ29tcG9uZW50LmNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXI7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuPnt7c3BlY2lhbENoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5lbmFibGVMZW5ndGhSdWxlXCIgQGl0ZW1zIGNsYXNzPVwiaW5mby1yb3dcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5jb250YWluQXRMZWFzdE1pbkNoYXJzOyB0aGVuIGRvbmUgZWxzZSBlcnJvclwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XG4gICAgICAgIDxtYXQtaWNvbiBAcG9zaXRpdmVTdGF0ZSBjb2xvcj1cInByaW1hcnlcIj57e21hdEljb25Eb25lfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XG4gICAgICAgIDxtYXQtaWNvbiBAbmVnYXRpdmVTdGF0ZSBjb2xvcj1cIndhcm5cIj57e21hdEljb25FcnJvcn19PC9tYXQtaWNvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8c3Bhbj57e21pbkNoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5jdXN0b21WYWxpZGF0b3JcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxuICAgICAgPGRpdiAqbmdJZj1cInBhc3N3b3JkQ29tcG9uZW50LmNvbnRhaW5BdEN1c3RvbUNoYXJzOyB0aGVuIGRvbmUgZWxzZSBlcnJvclwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XG4gICAgICAgIDxtYXQtaWNvbiBAcG9zaXRpdmVTdGF0ZSBjb2xvcj1cInByaW1hcnlcIj57e21hdEljb25Eb25lfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XG4gICAgICAgIDxtYXQtaWNvbiBAbmVnYXRpdmVTdGF0ZSBjb2xvcj1cIndhcm5cIj57e21hdEljb25FcnJvcn19PC9tYXQtaWNvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8c3Bhbj57e2N1c3RvbUNoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJlbmFibGVTY29yZUluZm9cIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxuICAgICAgPGRpdiAqbmdJZj1cInBhc3N3b3JkQ29tcG9uZW50LnN0cmVuZ3RoID09PSAxMDA7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuPlBhc3N3b3JkJ3Mgc3RyZW5ndGggPSB7e3Bhc3N3b3JkQ29tcG9uZW50LnN0cmVuZ3RofX0gJTEwMDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPiJdfQ==