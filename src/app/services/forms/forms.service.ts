import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

enum MarkAs {
  TOUCHED = 'markAsTouched',
  UNTOUCHED = 'markAsUntouched',
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() {}

  validateAllFormFields(formGroup: FormGroup | FormArray, markAs: string = MarkAs.TOUCHED) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        return control[markAs]();
      }

      if (control instanceof FormArray) {

        if (control.controls.length) {
          if (control.controls[0] instanceof FormControl) {
            (control as FormArray).controls.forEach((ctrl: FormControl) => {
              return ctrl[markAs]();
            });
          }
          if (control.controls[0] instanceof FormGroup) {
            (control as FormArray).controls.forEach((ctrl: FormGroup) => {
              this.validateAllFormFields(ctrl, markAs);
            });
          }
        } else {
          (control as FormArray)[markAs]();
        }
      }

      if (control instanceof FormGroup) {
        this.validateAllFormFields(control, markAs);
      }
    });
    formGroup[markAs]();
  }

  hideValidateAllFormFields(formGroup: FormGroup | FormArray) {
    this.validateAllFormFields(formGroup, MarkAs.UNTOUCHED);
  }
}
