import { Platform } from '@angular/cdk/platform';
import {Injectable} from '@angular/core';

@Injectable()
export class ApplicationStateService {

  private isMobileResolution: boolean;

  constructor(platform: Platform) {
    if (platform.ANDROID || platform.IOS) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  public getIsMobileResolution(): boolean {
    console.log(window.innerWidth)
    return this.isMobileResolution;
  }
}
