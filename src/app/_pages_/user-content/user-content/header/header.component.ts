import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '@tracker/services/auth/auth.service';
import { UserService } from '@tracker/services/user/user.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string;

  constructor(
      private authSvc: AuthService,
      private userSvc: UserService
  ) { }

  ngOnInit() {
    this.userSvc.userInfo$.pipe(untilDestroyed(this)).subscribe(info => this.username = info.username || 'user');
  }

  logOut() {
    this.authSvc.logout();
  }

  ngOnDestroy() {}
}
