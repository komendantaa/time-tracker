import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() {}

  createFormData(object: Object, form?: FormData, namespace?: string, fileNamePrefix?: string): FormData {
    const formData = form || new FormData();

    for (const property in object) {
      if (!object.hasOwnProperty(property) || object[property] === null || typeof object[property] === 'undefined') continue;

      const formKey = namespace ? `${namespace}[${property}]` : property;

      if (object[property] instanceof Date) {
        formData.append(formKey, object[property].toISOString());
      } else if (typeof object[property] === 'object' && !(object[property] instanceof File) && !(object[property] instanceof Blob)) {
        this.createFormData(object[property], formData, formKey, fileNamePrefix);
      } else if (typeof object[property] === 'object' && object[property] instanceof File && object[property] instanceof Blob) {
        formData.append(formKey, object[property], fileNamePrefix + object[property].name);
      } else {
        formData.append(formKey, object[property]);
      }
    }

    return formData;
  }

  validateAllFormFields(formGroup: FormGroup | FormArray, markAs: string = 'markAsTouched') {
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
    this.validateAllFormFields(formGroup, 'markAsUntouched');
  }
}
