import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/core";
export class MatPassToggleVisibilityComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRbEUsTUFBTSxPQUFPLGdDQUFnQztJQUczQyxTQUFTLENBQVU7SUFHbkIsUUFBUSxDQUFVO0lBRWxCLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQzswSEFWVSxnQ0FBZ0M7NkRBQWhDLGdDQUFnQztZQ1I3QyxpQ0FTQztZQVJDLCtJQUFnQztZQVNoQyxnQ0FBVTtZQUFBLFlBQWlEO1lBQzdELEFBRDZELGlCQUFXLEVBQy9EOzs7WUFERyxlQUFpRDtZQUFqRCxxRUFBaUQ7OztpRkRGaEQsZ0NBQWdDO2NBTjVDLFNBQVM7MkJBQ0UsNEJBQTRCLGlCQUd2QixpQkFBaUIsQ0FBQyxJQUFJO2dCQUtyQyxTQUFTO2tCQURSLEtBQUs7WUFJTixRQUFRO2tCQURQLEtBQUs7O2tGQUxLLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB0YWJpbmRleD86IHN0cmluZztcblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1Zpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xuICB9XG5cbn1cbiIsIjxidXR0b25cbiAgKGNsaWNrKT1cImlzVmlzaWJsZSA9ICFpc1Zpc2libGVcIlxuICBjbGFzcz1cIm1hdC1pY29uLWJ1dHRvbiBjZGstZm9jdXNlZCBjZGstbW91c2UtZm9jdXNlZFwiXG4gIG1hdC1pY29uLWJ1dHRvblxuICBtYXRSaXBwbGVcbiAgbWF0UmlwcGxlQ2VudGVyZWQ9XCJ0cnVlXCJcbiAgbWF0UmlwcGxlXG4gIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4ID8gdGFiaW5kZXggOiBudWxsXCJcbiAgdHlwZT1cImJ1dHRvblwiXG4+XG4gIDxtYXQtaWNvbj57eyBpc1Zpc2libGUgPyBcInZpc2liaWxpdHlcIiA6IFwidmlzaWJpbGl0eV9vZmZcIiB9fTwvbWF0LWljb24+XG48L2J1dHRvbj5cbiJdfQ==