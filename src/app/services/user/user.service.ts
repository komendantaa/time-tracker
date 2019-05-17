import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '@tracker/services/api/api.service';
import { StorageService } from '@tracker/services/storage/storage.service';
import { IUser } from '@tracker/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userInfo: IUser = this.getLocalData();
  userInfo$ = new BehaviorSubject<IUser>(this._userInfo);

  constructor(private apiSvc: ApiService, private storage: StorageService) {}

  fetchUserInfo(newData?: IUser) {
    if (newData) {
      this.userInfo$.next(newData);
      this.saveDataLocally(newData);
    } else {
      this.apiSvc.get('/users/profile').subscribe((res: IUser) => {
        this.userInfo$.next(res);
        this.saveDataLocally(res);
      });
    }
  }

  private saveDataLocally(data: IUser) {
    this.storage.setItem('impl_user', data);
  }

  private getLocalData(): IUser {
    return this.storage.getItemParsed('impl_user') || this.resetUser();
  }

  getIdentity(params = {}): Observable<any> {
    return this.apiSvc.get('/users/profile', params);
  }

  changePassword(params: IUser): Observable<any> {
    return this.apiSvc.put('/users/password', params || {});
  }

  changeUserInfo(params = {}): Observable<any> {
    return this.apiSvc.put('/users', params);
  }

  changeEmail(params = {}): Observable<any> {
    return this.apiSvc.put('/users/email', params);
  }

  changePhoto(params = {}): Observable<any> {
    return this.apiSvc.post('/users/avatar', params);
  }

  saveUser(data: IUser) {
    this.storage.setItem('impl_user', data);
  }

  eraseUser() {
    this.storage.removeItem('impl_user');
  }

  getStoredIdentity(): IUser {
    return this.storage.getItemParsed('impl_user');
  }

  resetUser(): IUser {
    return {
      avatar: '',
      company_name: '',
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
    };
  }
}
