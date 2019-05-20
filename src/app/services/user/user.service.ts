import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '@tracker/services/api/api.service';
import { StorageService } from '@tracker/services/storage/storage.service';
import { IUserInfo, IUserRequest } from '@tracker/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userInfo: IUserInfo = this.getLocalData();
  userInfo$ = new BehaviorSubject<IUserInfo>(this._userInfo);

  constructor(private apiSvc: ApiService, private storage: StorageService) {}

  fetchUserInfo(newData?: IUserInfo) {
    if (newData) {
      this.userInfo$.next(newData);
      this.saveDataLocally(newData);
    } else {
      this.getUserInfo().subscribe((res: IUserInfo) => {
        this.userInfo$.next(res);
        this.saveDataLocally(res);
      });
    }
  }

  private saveDataLocally(data: IUserInfo) {
    this.storage.setItem('user', data);
  }

  private getLocalData(): IUserInfo {
    return this.storage.getItemParsed('user') || this.resetUser();
  }

  private getUserInfo(): Observable<IUserInfo> {
    return this.apiSvc.get('/users/profile');
  }

  updUserInfo(params: IUserRequest) {
    return this.apiSvc.post('/users/profile', params)
        .pipe(tap(
            () => {},
            () => {
              // because of no api
              const dumbUser = {
                avatar: params.avatar,
                username: params.username
              };
              this.fetchUserInfo(dumbUser);
            },
        ));
  }

  eraseUser() {
    this.storage.removeItem('user');
  }

  getStoredIdentity(): IUserInfo {
    return this.storage.getItemParsed('user');
  }

  resetUser(): IUserInfo {
    return {
      avatar: '',
      username: '',
    };
  }
}
