import { Injectable } from '@angular/core';

const charSet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  generate(): string {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return result;
  }
}
