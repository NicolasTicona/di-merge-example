import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { AboutService } from '../about/about.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent],
  providers: [
    DashboardService,
  ]
})
export class DashboardModule { }
