import { FormGroup } from '@angular/forms';

export function ComprobarPass(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const coincidencia = formGroup.controls[matchingControlName];

        if (coincidencia.errors && !coincidencia.errors.comprobarPass) {
            return;
        }

        if (control.value !== coincidencia.value) {
            coincidencia.setErrors({ comprobarPass: true });
        } else {
            coincidencia.setErrors(null);
        }
    }
}
