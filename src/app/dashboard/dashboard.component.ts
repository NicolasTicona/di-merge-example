import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about/about.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
    </p>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.greet();
    console.log(this.aboutService.value);
  }

}
