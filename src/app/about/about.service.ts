import { Injectable } from '@angular/core';
import { AboutModule } from './about.module';

@Injectable()
export class AboutService {

  value: number = 1;

  constructor() { }

  greet() {
    console.log('hello from about');
  }
}
