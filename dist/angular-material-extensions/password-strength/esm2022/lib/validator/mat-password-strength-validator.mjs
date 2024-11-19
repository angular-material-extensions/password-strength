export class MatPasswordStrengthValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL3ZhbGlkYXRvci9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyw0QkFBNEI7SUFFdkMsa0JBQWtCLENBQUMsT0FBd0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDN0QsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsUUFBZ0IsRUFBRSxLQUFhO1FBQ3RDLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBd0IsRUFBMEIsRUFBRTtZQUNyRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUNqQixXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSxLQUFLO2lCQUN2QixDQUFDO2dCQUNGLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQWdCO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBd0IsRUFBMEIsRUFBRTtZQUNyRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixPQUFPO29CQUNMLFlBQVksRUFBRTt3QkFDWixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLEtBQUs7cUJBQ3BDO2lCQUNGLENBQUE7WUFDSCxDQUFDO1lBQ0QsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yIHtcblxuICBpc1VuZGVmaW5lZE9yRW1wdHkoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogYW55IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIWNvbnRyb2wgfHwgIWNvbnRyb2wudmFsdWUgfHwgY29udHJvbC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoY3JpdGVyaWE6IHN0cmluZywgcmVnZXg6IFJlZ0V4cCk6IFZhbGlkYXRvckZuIHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICB0aGlzLmlzVW5kZWZpbmVkT3JFbXB0eShjb250cm9sKTtcbiAgICAgIGlmICghcmVnZXgudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgICBjb25zdCBmYWlsZWQgPSB7fTtcbiAgICAgICAgZmFpbGVkW2NyaXRlcmlhXSA9IHtcbiAgICAgICAgICBhY3R1YWxWYWx1ZTogY29udHJvbC52YWx1ZSxcbiAgICAgICAgICByZXF1aXJlZFBhdHRlcm46IHJlZ2V4XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmYWlsZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgfVxuXG4gIGNvbmZpcm0ocGFzc3dvcmQ6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICB0aGlzLmlzVW5kZWZpbmVkT3JFbXB0eShjb250cm9sKTtcbiAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vdENvbmZpcm1lZDoge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246IGNvbnRyb2wudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gdmFsaWRhdG9yO1xuICB9XG5cbn1cbiJdfQ==