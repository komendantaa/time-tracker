import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@tracker/services/auth/auth.service';
import { FormsService } from '@tracker/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signForm: FormGroup;

  constructor(
      private router: Router,
      private authSvc: AuthService,
      private formsSvc: FormsService,
  ) {
    this.signForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(false)
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.signForm.valid) {
      this.authSvc.login(this.signForm.value).subscribe(
          () => this.router.navigate(['/tracker']),
          () => this.router.navigate(['/tracker']) // because of no api...
      );
    } else {
      this.formsSvc.validateAllFormFields(this.signForm);
    }
  }
}
