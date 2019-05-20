import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '@tracker/services/api/api.service';
import { JwtService } from '@tracker/services/token/jwt.service';
import { UserService } from '@tracker/services/user/user.service';

import { ILoginRequest, ILoginResp } from '@tracker/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStatus$ = new BehaviorSubject<boolean>(false);

  constructor(
      private jwtSvc: JwtService,
      private router: Router,
      private apiSvc: ApiService,
      private userSvc: UserService,
  ) {
    this.checkAndLogoutIfNeed();
  }

  login(params: ILoginRequest): Observable<any> {
    return this.apiSvc.post('/login', params)
        .pipe(tap(
            (data: ILoginResp) => {
              this.authStatus$.next(true);
              this.jwtSvc.setToken(data.token);
              this.fetchProfiles();
            },
            (err) => {
              // because of no api...
              this.authStatus$.next(true);
              const dumbJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                  'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.' +
                  'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
              this.jwtSvc.setToken(dumbJwt);
              const dumbUser = {
                avatar: '',
                username: params.username
              };
              this.userSvc.fetchUserInfo(dumbUser);
            }
        ));
  }

  logout() {
    this.router.navigate(['/auth']).then(() => {
      this.resetProfiles();
      this.jwtSvc.eraseToken();
      this.userSvc.eraseUser();
      this.authStatus$.next(false);
    });
  }

  private fetchProfiles() {
    this.userSvc.fetchUserInfo();
  }

  private resetProfiles() {
    this.userSvc.fetchUserInfo(this.userSvc.resetUser());
  }

  private checkAndLogoutIfNeed() {
    if (this.isAuthenticated()) {
      this.authStatus$.next(true);
      // this.fetchProfiles();
    } else {
      this.logout();
    }
  }

  isAuthenticated(): boolean {
    // return this.jwtSvc.getToken() && this.jwtSvc.isExpired();
    return !!this.jwtSvc.getToken();
  }
}
