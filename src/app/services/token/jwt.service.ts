import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { StorageService } from '@tracker/services/storage/storage.service';

interface IToken {
  exp: number,
  iat: number,
  public_id: string,
  registration_completed: boolean,
  roles: string,
  username: string,
}

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private jwtHelperSvc: JwtHelperService, private storage: StorageService) { }

  getToken(): string {
    return this.storage.getItem('token');
  }

  setToken(token: string): void {
    this.storage.setItem('token', token);
  }

  eraseToken(): void {
    this.storage.removeItem('token');
  }

  isExpired(): boolean {
    return this.jwtHelperSvc.isTokenExpired(this.getToken());
  }

  getDetails(): IToken {
    return this.jwtHelperSvc.decodeToken(this.getToken());
  }
}
