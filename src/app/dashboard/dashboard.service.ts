import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  value: number = 1;

  constructor() { }

  great() {
    console.log('hello from dashboard');
  }
}
