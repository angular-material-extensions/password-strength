import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent } from './component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
// validator
export { RegExpValidator } from './validator/regexp.class';
export class MatPasswordStrengthModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL21hdC1wYXNzd29yZC1zdHJlbmd0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdDQUFnQyxFQUFFLDRCQUE0QixFQUFFLGdDQUFnQyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzdILE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELFlBQVk7QUFDWixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFzQnpELE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO21IQU5VLHlCQUF5Qjs0REFBekIseUJBQXlCO2dFQWxCbEMsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlOztpRkFhTix5QkFBeUI7Y0FwQnJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCw0QkFBNEI7b0JBQzVCLGdDQUFnQztvQkFDaEMsZ0NBQWdDO2lCQUNqQztnQkFDRCxZQUFZLEVBQUU7b0JBQ1osNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLGdDQUFnQztpQkFDakM7YUFDRjs7d0ZBQ1kseUJBQXlCLG1CQUxsQyw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLGdDQUFnQyxhQWZoQyxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWUsYUFHZiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50LCBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50LCBNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8vIHZhbGlkYXRvclxuZXhwb3J0IHtSZWdFeHBWYWxpZGF0b3J9IGZyb20gJy4vdmFsaWRhdG9yL3JlZ2V4cC5jbGFzcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQsXG4gICAgTWF0UGFzc3dvcmRTdHJlbmd0aEluZm9Db21wb25lbnQsXG4gICAgTWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCxcbiAgICBNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudCxcbiAgICBNYXRQYXNzVG9nZ2xlVmlzaWJpbGl0eUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBhc3N3b3JkU3RyZW5ndGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1hdFBhc3N3b3JkU3RyZW5ndGhNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hdFBhc3N3b3JkU3RyZW5ndGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19