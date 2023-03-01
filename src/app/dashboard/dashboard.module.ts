import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { AboutService } from '../about/about.service';
import { SimpleChartModule } from '../simple-chart/simple-chart.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SimpleChartModule
  ],
  exports: [DashboardComponent],
  providers: [
    DashboardService,
  ]
})
export class DashboardModule { }
