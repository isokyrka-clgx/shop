import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private static config: Object;

  private constructor() { }

  static setConfig(config: Object) {
    this.config = config;
  }

  static getConfig(): Object {
    return this.config;
  }
}
