import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { AuthService } from '@tracker/services/auth/auth.service';
import { UserService } from '@tracker/services/user/user.service';
import { FormsService } from '@tracker/services/forms/forms.service';
import { IUserInfo } from '@tracker/interfaces';
import { AppConfig } from '@tracker/app.config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  appConfig = AppConfig;

  profileForm: FormGroup;
  profile: IUserInfo = this.userSvc.resetUser();

  constructor(
      private router: Router,
      private authSvc: AuthService,
      private userSvc: UserService,
      private formsSvc: FormsService,
  ) {

    this.profileForm = new FormGroup({
      avatar: new FormControl(null),
      username: new FormControl('', [Validators.required]),
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
    });
    this.userSvc.userInfo$.pipe(untilDestroyed(this)).subscribe(info => {
      this.profile = info;
      this.profileForm.get('username').setValue(info.username);
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.userSvc.updUserInfo(this.profileForm.value).subscribe();
    } else {
      this.formsSvc.validateAllFormFields(this.profileForm);
    }
  }

  ngOnDestroy() {}
}
