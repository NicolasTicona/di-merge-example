import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.value = 2;
    this.aboutService.greet();
    console.log(this.aboutService.value);
  }

}
