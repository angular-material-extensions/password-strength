import { OnInit } from '@angular/core';
import { MatPasswordStrengthComponent } from '../mat-password-strength/mat-password-strength.component';
import * as i0 from "@angular/core";
export declare class MatPasswordStrengthInfoComponent implements OnInit {
    passwordComponent: MatPasswordStrengthComponent;
    enableScoreInfo: boolean;
    lowerCaseCriteriaMsg: string;
    upperCaseCriteriaMsg: string;
    digitsCriteriaMsg: string;
    specialCharsCriteriaMsg: string;
    customCharsCriteriaMsg: string;
    minCharsCriteriaMsg: string;
    matIconDone: string;
    matIconError: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPasswordStrengthInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatPasswordStrengthInfoComponent, "mat-password-strength-info", ["matPasswordStrengthInfo"], { "passwordComponent": { "alias": "passwordComponent"; "required": false; }; "enableScoreInfo": { "alias": "enableScoreInfo"; "required": false; }; "lowerCaseCriteriaMsg": { "alias": "lowerCaseCriteriaMsg"; "required": false; }; "upperCaseCriteriaMsg": { "alias": "upperCaseCriteriaMsg"; "required": false; }; "digitsCriteriaMsg": { "alias": "digitsCriteriaMsg"; "required": false; }; "specialCharsCriteriaMsg": { "alias": "specialCharsCriteriaMsg"; "required": false; }; "customCharsCriteriaMsg": { "alias": "customCharsCriteriaMsg"; "required": false; }; "minCharsCriteriaMsg": { "alias": "minCharsCriteriaMsg"; "required": false; }; "matIconDone": { "alias": "matIconDone"; "required": false; }; "matIconError": { "alias": "matIconError"; "required": false; }; }, {}, never, never, false, never>;
}
