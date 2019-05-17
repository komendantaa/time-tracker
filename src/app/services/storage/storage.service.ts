import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly _isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this._isBrowser = isPlatformBrowser(this.platformId);
  }

  setItem(key: string, data: any) {
    this._isBrowser && window.localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
  }

  getItem(key: string): string {
    return this._isBrowser && window.localStorage.getItem(key) || null;
  }

  getItemParsed<T>(key: string): T {
    return this.getItem(key) && JSON.parse(this.getItem(key)) || null;
  }

  removeItem(key: string) {
    this._isBrowser && window.localStorage.removeItem(key);
  }
}
